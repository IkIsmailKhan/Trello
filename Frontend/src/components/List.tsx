import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import cross from '../../public/svgs/cross-icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListContext from "../store/List/Context";

type Props = {
    listName: string;
    todoList: any
    doingList: any
    doneList: any
};

const TodoList: React.FC<Props> = ({
    listName,
    todoList,
    doingList,
    doneList,
}) => {

    const { todoLoading,
        doingLoading,
        doneLoading,
        deleteTodoList,
        deleteDoingList,
        deleteDoneList } = useContext(ListContext);

    return (
        <Wrapper>
            <Container>
                <Title>
                    {listName}
                </Title>

                <ListCardContainer>
                    {
                        listName == "Todo" ?
                            todoLoading ?
                                <Loading>
                                    <CircularProgress style={{ 'color': '#4b7fcd' }} />
                                </Loading> :
                                todoList.map((item: any, index: any) => (
                                    <ListCard key={item.id}>
                                        <Link href={{
                                            pathname: '/detail-page',
                                            query: { id: item.id, listName: listName, title: item.title, description: item.description, edit: "enable", index: index },
                                        }}>
                                            <ClickableArea>
                                                <ListCardTitle>{item.title}</ListCardTitle>
                                            </ClickableArea>
                                        </Link>
                                        <ListCardCross onClick={() => deleteTodoList(item.id)}>{cross}</ListCardCross>
                                    </ListCard>
                                ))


                            : listName == "Doing" ?
                                doingLoading ?
                                    <Loading>
                                        <CircularProgress style={{ 'color': '#4b7fcd' }} />
                                    </Loading>
                                    :
                                    doingList.map((item: any, index: any) => (
                                        <ListCard key={item.id}>
                                            <Link href={{
                                                pathname: '/detail-page',
                                                query: { id: item.id, listName: listName, title: item.title, description: item.description, edit: "enable", index: index },
                                            }}>
                                                <ClickableArea>

                                                    <ListCardTitle>{item.title}</ListCardTitle>
                                                </ClickableArea>
                                            </Link>
                                            <ListCardCross onClick={() => deleteDoingList(item.id)}>{cross}</ListCardCross>
                                        </ListCard>
                                    ))


                                : listName == "Done" ?
                                    doneLoading ?
                                        <Loading>
                                            <CircularProgress style={{ 'color': '#4b7fcd' }} />
                                        </Loading> :
                                        doneList.map((item: any, index: any) => (
                                            <ListCard key={item.id}>
                                                <Link href={{
                                                    pathname: '/detail-page',
                                                    query: { id: item.id, listName: listName, title: item.title, description: item.description, edit: "enable", index: index },
                                                }}>
                                                    <ClickableArea>
                                                        <ListCardTitle>{item.title}</ListCardTitle>
                                                    </ClickableArea>
                                                </Link>
                                                <ListCardCross onClick={() => deleteDoneList(item.id)}>{cross}</ListCardCross>
                                            </ListCard>
                                        ))
                                    : null
                    }
                </ListCardContainer>

                <ButtonSection>
                    <Link
                        href={{
                            pathname: '/detail-page',
                            query: { listName: listName },
                        }}
                    >
                        <Button>Add Card</Button>
                    </Link>
                </ButtonSection>
            </Container>
        </Wrapper >
    )
}

export default TodoList;

const Wrapper = styled.div`
                background-color: #e6e6e6;
                flex: 1;
                margin: 4rem;
                border-radius: 0.5rem;
                `
const Container = styled.div`
                height: 100%;
                display: flex;
                flex-direction: column;
                `
const Title = styled.div`
                font-size: 1.25rem;
                font-weight: 600;
                padding: 1.25rem;
                `
const ListCardContainer = styled.div`
                overflow-y: scroll;
                flex: 1;
                ::-webkit-scrollbar {
                    display: none;
    }
                `
const ButtonSection = styled.div`
                width: 100%;
                padding: 1.25rem;
                `
const ListCard = styled.div`
                background-color: white;
                height: 4.5rem;
                margin 0 1.25rem 1.25rem 1.25rem;
                border-radius: 0.5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
                cursor: pointer;
                transition: transform .1s;
                &:hover {
                    transform: scale(0.98);
                }
                `
const ClickableArea = styled.div`
                height: 4rem;
                width: 15rem;
                display: flex;
                align-items: center
                `

const ListCardTitle = styled.div`
                font-size: 1.25rem;
                font-weight: 300;
                `
const ListCardCross = styled.div`
                `
const Button = styled.div`
                color: white;
                background-color: #4b7fcd;
                border-radius: 0.5rem;
                padding: 1.25rem 1.5rem 1.25rem 1.5rem;
                border-color: none;
                width: 9rem;
                text-align: center;
                font-size: 1.25rem;
                font-weight: 300;
                cursor: pointer;
                transition: transform .1s;
                &:hover {
                    transform: scale(0.97);
    }
                `

const Loading = styled.div`
                text-align: center;
                margin-top: 12rem
                `

