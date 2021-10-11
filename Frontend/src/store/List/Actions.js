import React, { useReducer } from "react";
import ListContext from "./Context";
import listReducer from "./Reducers";
import jsonServer from "api/jsonServer";

const Actions = (props) => {

  const initialState = {
    todo: [],
    doing: [],
    done: [],
    todoLoading: false,
    doingLoading: false,
    doneLoading: false,
    saving: false,
    deleting: false,
  };

  const [state, dispatch] = useReducer(listReducer, initialState);


  //Todo List
  const getTodoList = async () => {
    try {
      const response = await jsonServer.get("/todolist");
      dispatch({ type: `GET_TODO_LIST`, payload: response.data });
    }
    catch (err) {
      console.log(err);
    }
  };

  const addTodoList = async (title, description) => {
    try {
      savingTrue();
      await jsonServer.post('/todolist', {
        title: title,
        description: description,
      });
      savingFalse();
    }
    catch (err) {
      console.log(err)
    }
  };

  const editTodoList = async (index, id, title, description) => {
    try {
      savingTrue();
      const response = await jsonServer.put(`/todolist/${id}`, {
        title: title,
        description: description,
      });
      dispatch({ type: 'EDIT_TODO_LIST', payload: { response: response.data, index: index } })
      savingFalse();
    }
    catch (err) {
      console.log(err)
    }
  };

  const deleteTodoList = async (id) => {
    try {
      todoLoadingTrue();
      deletingTrue();
      await jsonServer.delete(`/todolist/${id}`);
      deletingFalse();
      todoLoadingFalse();
      dispatch({ type: 'DELETE_TODO_LIST', payload: id })
    }
    catch (err) {
      console.log(err)
    }
  };

  const todoLoadingTrue = async () => {
    dispatch({ type: `TODO_LOADIND_TRUE` });
  };

  const todoLoadingFalse = async () => {
    dispatch({ type: `TODO_LOADIND_FALSE` });
  };





  //Doing List
  const getDoingList = async () => {
    try {
      const response = await jsonServer.get("/doinglist");
      dispatch({ type: `GET_DOING_LIST`, payload: response.data });
    }
    catch (err) {
      console.log(err)
    }
  };

  const addDoingList = async (title, description) => {
    try {
      savingTrue();
      await jsonServer.post('/doinglist', {
        title: title,
        description: description,
      });
      savingFalse();
    }
    catch (err) {
      console.log(err)
    }
  };


  const editDoingList = async (index, id, title, description) => {
    try {
      savingTrue();
      const response = await jsonServer.put(`/doinglist/${id}`, {
        title: title,
        description: description,
      });
      dispatch({ type: 'EDIT_DOING_LIST', payload: { response: response.data, index: index } })
      savingFalse();
    }
    catch (err) {
      console.log(err)
    }
  };

  const deleteDoingList = async (id) => {
    try {
      doingLoadingTrue();
      deletingTrue();
      await jsonServer.delete(`/doinglist/${id}`);
      deletingFalse();
      doingLoadingFalse();
      dispatch({ type: 'DELETE_DOING_LIST', payload: id })
    }
    catch (err) {
      console.log(err)
    }
  };

  const doingLoadingTrue = async () => {
    dispatch({ type: `DOING_LOADIND_TRUE` });
  };

  const doingLoadingFalse = async () => {
    dispatch({ type: `DOING_LOADIND_FALSE` });
  };





  //Done List
  const getDoneList = async () => {
    try {
      const response = await jsonServer.get("/donelist");
      dispatch({ type: `GET_DONE_LIST`, payload: response.data });
    }
    catch (err) {
      console.log(err)
    }
  };

  const addDoneList = async (title, description) => {
    try {
      savingTrue();
      await jsonServer.post('/donelist', {
        title: title,
        description: description,
      });
      savingFalse();
    }
    catch (err) {
      console.log(err)
    }
  };

  const editDoneList = async (index, id, title, description) => {
    try {
      savingFalse();
      const response = await jsonServer.put(`/donelist/${id}`, {
        title: title,
        description: description,
      });
      dispatch({ type: 'EDIT_DONE_LIST', payload: { response: response.data, index: index } })
      savingFalse();
    }
    catch (err) {
      console.log(err)
    }
  };

  const deleteDoneList = async (id) => {
    try {
      doneLoadingTrue();
      deletingTrue();
      await jsonServer.delete(`/donelist/${id}`);
      deletingFalse();
      doneLoadingFalse();
      dispatch({ type: 'DELETE_DONE_LIST', payload: id })
    }
    catch (err) {
      console.log(err)
    }
  };

  const doneLoadingTrue = async () => {
    dispatch({ type: `DONE_LOADIND_TRUE` });
  };

  const doneLoadingFalse = async () => {
    dispatch({ type: `DONE_LOADIND_FALSE` });
  };




  //SAVING
  const savingTrue = async () => {
    dispatch({ type: `SAVING_TRUE` });
  };

  const savingFalse = async () => {
    dispatch({ type: `SAVING_FALSE` });
  };







  //DELETING
  const deletingTrue = async () => {
    dispatch({ type: `DELETING_TRUE` });
  };

  const deletingFalse = async () => {
    dispatch({ type: `DELETING_FALSE` });
  };


  return (
    <ListContext.Provider
      value={{
        todo: state.todo,
        doing: state.doing,
        done: state.done,
        todoLoading: state.todoLoading,
        doingLoading: state.doingLoading,
        doneLoading: state.doneLoading,
        saving: state.saving,
        deleting: state.deleting,

        getTodoList,
        addTodoList,
        deleteTodoList,
        editTodoList,

        getDoingList,
        addDoingList,
        deleteDoingList,
        editDoingList,

        getDoneList,
        addDoneList,
        deleteDoneList,
        editDoneList
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default Actions;
