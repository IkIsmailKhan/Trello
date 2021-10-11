import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'components/Navbar';
import styled from 'styled-components';
import { useRouter } from "next/router";
import ListContext from "../store/List/Context";
import Popup from 'components/Popup';

const DetailPage = () => {

  const router = useRouter();

  const {
    saving,
    deleting,
    deleteTodoList,
    deleteDoingList,
    deleteDoneList,
    addTodoList,
    addDoingList,
    addDoneList,
    editTodoList,
    editDoingList,
    editDoneList } = useContext(ListContext);

  const [heading, setHeading] = useState<any>("");
  const [description, setDescription] = useState<any>("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);


  const handleHeadingInput = (e: any) => {
    setHeading(e.target.value);
  }

  const handleDescriptionInput = (e: any) => {
    setDescription(e.target.value)
  }

  const handleSaveRecord = async (index: any, listName: any, id: any, heading: any, description: any) => {

    if (heading == undefined || heading == "") {
      setMessage("Title")
      return setOpen(true);
    }

    if (description == undefined || description == "") {
      setMessage("Description")
      return setOpen(true);
    }

    if (router.query.edit == 'enable') {
      if (listName == "Todo") {
        await editTodoList(index, id, heading, description);
        router.push('/');
      } else if (listName == "Doing") {
        await editDoingList(index, id, heading, description);
        router.push('/');
      } else {
        await editDoneList(index, id, heading, description);
        router.push('/');
      }
    } else {
      if (listName == "Todo") {
        await addTodoList(heading, description);
        router.push('/');
      } else if (listName == "Doing") {
        await addDoingList(heading, description);
        router.push('/');
      } else {
        await addDoneList(heading, description);
        router.push('/');
      }
    }
  }

  const handleDeleteRecord = async (id: any, listName: any) => {
    if (listName == "Todo") {
      await deleteTodoList(id);
      router.push('/');
    } else if (listName == "Doing") {
      await deleteDoingList(id);
      router.push('/');
    } else {
      await deleteDoneList(id);
      router.push('/');
    }
  }

  useEffect(() => {
    setHeading(router.query.title);
    setDescription(router.query.description);
  }, [])


  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Heading
          type='text'
          onChange={handleHeadingInput}
          value={heading}
          placeholder={`${router.query.listName}`}
        />

        <SubHeading>
          In List {" "}
          <Underline>
            {router.query.listName}
          </Underline>
        </SubHeading>

        <DescriptionHeading>
          Description
        </DescriptionHeading>

        <Description
          typeof='text'
          onChange={handleDescriptionInput}
          value={description}
          placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede."
        />

        <ButtonContainer>
          <SaveButton
            onClick={() => handleSaveRecord(router.query.index, router.query.listName, router.query.id, heading, description)}>
            {
              router.query.edit == "enable" ? saving ? "Editing" : "Edit Card" : saving ? "Saving" : "Save Card"
            }
          </SaveButton>

          {
            router.query.edit == "enable" ?
              <DeleteButton
                onClick={() => handleDeleteRecord(router.query.id, router.query.listName)}>

                {
                  deleting ? " Deleting" : "Delete Card"
                }
              </DeleteButton>
              :
              <DisableDeleteButton>Delete Card</DisableDeleteButton>
          }
        </ButtonContainer>

        <Popup
          open={open}
          setOpen={setOpen}
          message={message}
        />

      </Container>
    </Wrapper>
  )
};

export default DetailPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`
const Container = styled.div`
  height: 90vh;
  margin: 4rem;
`

const Heading = styled.input`
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 0.5rem 0.5rem 0rem;
  margin-bottom: 0.25rem;
`

const SubHeading = styled.div`
  margin-bottom: 3rem;
  color: grey;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`

const Underline = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

const DescriptionHeading = styled.div`
  margin-bottom: 1rem;
  color: grey;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`
const Description = styled.textarea`
  border: none;
  height: 5rem;
  width: 80%;
  margin-bottom: 2rem;  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  `

const ButtonContainer = styled.div`
  display: flex;
`

const SaveButton = styled.div`
  background-color: #2dbf2d;
  padding: 1rem 1.25rem 1rem 1.25rem;
  color: white;
  border-radius: 0.25rem;
  width: 8rem;
  text-align: center;
  margin-right: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: transform .1s;
  &:hover {
    transform: scale(0.97);
  }
`

const DeleteButton = styled.div`
background-color: #ce4a4a;
padding: 1rem 1.25rem 1rem 1.25rem;
color: white;
border-radius: 0.25rem;
width: 8rem;
text-align: center;
font-weight: 300;
cursor: pointer;
transition: transform .1s;
  &:hover {
    transform: scale(0.97);
  }
`

const DisableDeleteButton = styled.div`
background-color: #cf7878;
padding: 1rem 1.25rem 1rem 1.25rem;
color: white;
border-radius: 0.25rem;
width: 8rem;
text-align: center;
font-weight: 300;
cursor: default;
`