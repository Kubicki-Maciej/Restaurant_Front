import { useState, useEffect } from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import SingleKitchenOrder from "./SingleKitchenOrder";


// https://www.youtube.com/watch?v=RI9kA09Egas&ab_channel=BenAwad <- needed to create multiple lists
// https://github.com/benawad/react-tier-list/blob/0_react-beautiful-dnd/src/AuthorList.tsx
// https://egghead.io/lessons/react-conditionally-allow-movement-using-react-beautiful-dnd-draggable-and-droppable-props
export default function KitchenOrders() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [orderDone, setOrderDone] = useState([]);
    const [orderInProggres, setOrderInProggres] = useState([]);
    const [orderInWatting, setOrderWatting] = useState([]);

    // const [orders, updateOrders] = useState(data)
    


    useEffect(() => {
        fetch(`http://127.0.0.1:8000/kitchen/test/`)
            .then((response) => response.json())
            .then((actualData) => 
                {
                    setData(actualData);
                    setOrderDone(actualData.filter((order)=> order.order_status == "DONE"));
                    setOrderInProggres(actualData.filter((order)=> order.order_status == "IN_PROGRESS"));
                    setOrderWatting(actualData.filter((order)=> order.order_status == "WAITING"));
                }
            )
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    console.log(orderDone);
    console.log(orderInProggres);
    console.log(orderInWatting);

    function handleOnDragEnd(result){
        if (!result.destination) return;

        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setData(items);
    }

    return <div className="KitchenOrders">
        
        {loading && <div>Loading orders please wait...</div>}
        {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="order" key="dropable">
                {(provided) => (

                    // changed data useState into orders
                    <div  {...provided.droppableProps} ref={provided.innerRef}>
                        {data && 
                            data.map(({order_id,order_status,meal},index) =>

                                <SingleKitchenOrder 
                                order_id={order_id} 
                                order_status={order_status}
                                meal={meal}
                                index={index}
                                key={order_id}
                                />

                            )
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>

    </div>;

}