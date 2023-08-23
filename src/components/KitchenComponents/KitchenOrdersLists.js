import React from 'react'
import SingleKitchenOrder from './SingleKitchenOrder';
import {Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components'
import "./style/scroll.css"

const Container = styled.div`
    background-color: #f4f5f7;
    border-radius: 2.5px;
    width: 350px;
    height: 50vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;
`;

const Title = styled.h3`
    padding: 8px;
    background-color: pink;
    text-align: center;
`

const TaskList = styled.div`
    padding: 3px;
    transition: background-color 0.2s ease;
    background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`


export default function KitchenOrdersLists({title, orders, id}) {
  return (
    <Container className='column'>
            <Title style={{background: "lightblue", position:"stick"}}>
                {title}
            </Title>
            <Droppable droppableId={id}>
                {(provided, snapshot)=>(
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {
                            orders.map((order, index)=>(
                                <SingleKitchenOrder key={index} index={index} order={order}></SingleKitchenOrder>
                            ))
                        }
                     {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
    </Container>
  );
}
