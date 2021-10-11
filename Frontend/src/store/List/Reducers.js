const reducer = (state, action) => {

  switch (action.type) {

    //TODO LIST
    case `GET_TODO_LIST`:
      return { ...state, todo: action.payload };


    case `EDIT_TODO_LIST`:
      let filteredTodo = state.todo.filter(
        ({ id }) => id !== action.payload.response.id
      )
      filteredTodo.splice(action.payload.index, 0, action.payload.response);
      return { ...state, todo: filteredTodo };


    case `DELETE_TODO_LIST`:
      return {
        ...state,
        todo: state.todo.filter(
          ({ id }) => id !== action.payload
        ),
      };


    case `TODO_LOADIND_TRUE`:
      return { ...state, todoLoading: true };


    case `TODO_LOADIND_FALSE`:
      return { ...state, todoLoading: false };





    //DOING LIST
    case `GET_DOING_LIST`:
      return { ...state, doing: action.payload };


    case `DELETE_DOING_LIST`:
      return {
        ...state,
        doing: state.doing.filter(
          ({ id }) => id !== action.payload
        ),
      };


    case `EDIT_DOING_LIST`:
      let filteredDoing = state.doing.filter(
        ({ id }) => id !== action.payload.response.id
      )
      filteredDoing.splice(action.payload.index, 0, action.payload.response);
      return { ...state, doing: filteredDoing };


    case `DOING_LOADIND_TRUE`:
      return { ...state, doingLoading: true };


    case `DOING_LOADIND_FALSE`:
      return { ...state, doingLoading: false };





    //DONE LIST
    case `GET_DONE_LIST`:
      return { ...state, done: action.payload };


    case `DELETE_DONE_LIST`:
      return {
        ...state,
        done: state.done.filter(
          ({ id }) => id !== action.payload
        ),
      };


    case `EDIT_DONE_LIST`:
      let filteredDone = state.done.filter(
        ({ id }) => id !== action.payload.response.id
      )
      filteredDone.splice(action.payload.index, 0, action.payload.response);
      return { ...state, done: filteredDone };


    case `DONE_LOADIND_TRUE`:
      return { ...state, doneLoading: true };


    case `DONE_LOADIND_FALSE`:
      return { ...state, doneLoading: false };






    //SAVING
    case `SAVING_TRUE`:
      return { ...state, saving: true };

    case `SAVING_FALSE`:
      return { ...state, saving: false };





    //DELETING
    case `DELETING_TRUE`:
      return { ...state, deleting: true };

    case `DELETING_FALSE`:
      return { ...state, deleting: false };



    default:
      return state;
  }
};

export default reducer;
