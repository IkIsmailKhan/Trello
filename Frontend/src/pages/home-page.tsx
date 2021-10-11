import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Navbar from 'components/Navbar';
import List from '../components/List';
import ListContext from "../store/List/Context";

const Homepage = () => {

  const { todo, doing, done, getTodoList, getDoingList, getDoneList } = useContext(ListContext);

  const [list, setList] = useState(["Todo", "Doing", "Done"]);
  const [todoList, setListTodo] = useState([]);
  const [doingList, setListDoing] = useState([]);
  const [doneList, setListDone] = useState([]);

  useEffect(() => {

    getTodoList();
    getDoingList();
    getDoneList();

    setListTodo(todo);
    setListDoing(doing);
    setListDone(done);

  }, [todo.length, doing.length, done.length])

  return (
    <Wrapper>
      <Navbar />
      <ListContainer>
        {
          list.map((item: any) => {
            return (
              <List
                key={item}
                listName={item}
                todoList={todoList}
                doingList={doingList}
                doneList={doneList}
              />
            )
          })
        }
      </ListContainer>
    </Wrapper>
  )
};

export default Homepage;

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
`
const ListContainer = styled.main`
  height: 90vh;
  display: flex;
`