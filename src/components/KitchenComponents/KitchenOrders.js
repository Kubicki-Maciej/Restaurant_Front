import { useState, useEffect } from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import SingleKitchenOrder from "./SingleKitchenOrder";
import KitchenOrdersLists from "./KitchenOrdersLists";


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

    function handleOnDragEnd(result){
        // Old Function no more used
        if (!result.destination) return;

        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setData(items);
    }

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

    
        if (source.droppableId == destination.droppableId) return;
    
        //REMOVE FROM SOURCE ARRAY
    
        if (source.droppableId == 1) {
          setOrderDone(removeItemById(draggableId, orderDone));
        }
        else if (source.droppableId == 2){
            setOrderInProggres(removeItemById(draggableId, orderInProggres));
        }
        else if (source.droppableId == 3){
            setOrderWatting(removeItemById(draggableId, orderInWatting));
        }
    
        // GET ITEM
    
        const order = findItemById(draggableId, [...orderDone, ...orderInProggres, ...orderInWatting]);
        console.log(order);
    
        //ADD ITEM
        if (destination.droppableId == 1) {
            order.order_status = "DONE"
            setOrderDone([{ ...order}, ...orderDone]);
        } else if(destination.droppableId == 2){
            order.order_status = "IN_PROGRESS"
            setOrderInProggres([{ ...order}, ...orderInProggres]);
        } else if(destination.droppableId == 3){
            order.order_status = "WAITTING"
            setOrderWatting([{ ...order}, ...orderInWatting]);
        }
    };
    
    function findItemById(id, array) {
        return array.find((item) => item.order_id == id);
    }
    
    function removeItemById(id, array) {

        return array.filter((item) => item.order_id != id);
    }


    // console.log(orderInProggres);

    return <div className="KitchenOrders">
        
        {loading && <div>Loading orders please wait...</div>}
        {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <DragDropContext onDragEnd={handleDragEnd}>
            <h2 style={{textAlign: "center"}}>Kitchen Board</h2>
            <div style={{
                display:"flex",
                justifyContent:"center",
                // justifyContent:"space-between",
                alignItems:"center",
                flexDirection:"row",
            }}
            >
                <KitchenOrdersLists title={'DONE'} orders={orderDone} id={'1'}/>
                <KitchenOrdersLists title={'IN_PROGRESS'} orders={orderInProggres} id={'2'}/>
                <KitchenOrdersLists title={'WAITTING'} orders={orderInWatting} id={'3'}/>

            </div>


            {/* <Droppable droppableId="order" key="dropable">
                {(provided) => (

                    // changed data useState into orders
                    <div  {...provided.droppableProps} ref={provided.innerRef}>
                        {data && 
                            data.map((order,index) =>

                                <SingleKitchenOrder 
                                order={order} 
                                index={index}
                                />

                            )
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable> */}
        </DragDropContext>

    </div>;

}