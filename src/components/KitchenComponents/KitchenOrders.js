import { useState, useEffect } from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'

import axios from 'axios';
import KitchenOrdersLists from "./KitchenOrdersLists";
import OrderCount from "./OrdersCount";
import LogoutButton from "../LoginComponents/Logout";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});
export default function KitchenOrders() {
    const dataUserSelection = useSelector(state=>state.userData)
    const dataUserStatus = useSelector(state=>state.userLogin)

    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [orderDone, setOrderDone] = useState([]);
    const [orderInProggres, setOrderInProggres] = useState([]);
    const [orderInWatting, setOrderWatting] = useState([]);

    function changeOrderInProgress(order_id){
        client.get(`/kitchen/change_order_in_progress/${order_id}`)
    }
    function changeOrderWaiting(order_id){
        client.get(`/kitchen/change_order_waiting/${order_id}`)
    }
    function changeOrderDone(order_id){
        client.get(`/kitchen/change_order_done/${order_id}`)
    }

    async function fetchData(){
        client.get(`/kitchen/get_orders/`)            
        .then((actualData) => 
        {
            setData(actualData.data);
            setOrderDone(actualData.data.filter((order)=> order.order_status == "DONE"));
            setOrderInProggres(actualData.data.filter((order)=> order.order_status == "IN_PROGRESS"));
            setOrderWatting(actualData.data.filter((order)=> order.order_status == "WAITING"));
        }
    )
    .catch((err) => {
        setError(err.message);
        setData(null);
    })
    .finally(() => {
        setLoading(false);
    });
    }

    useEffect(() => {
        setInterval(()=>{
            fetchData();
        }, 5000)

    }, []);

    function handleOnDragEnd(result){
        // Old Function no more used
        if (!result.destination) return;

        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setData(items);
    }

    const changeServerOrderDone = (id) =>{
        
        console.log(`zostala wywolana funkcja change order ${id}`);

        try{
            const response =  fetch(`'/kitchen/change_order_done/'${id}`);
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            
        }catch (err){
            setErr(err.message);
        }finally{
            setIsLoading(false);
        }
    }

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (source.droppableId == destination.droppableId) return;    
        if (source.droppableId == 1) {
          setOrderDone(removeItemById(draggableId, orderDone));
        }
        else if (source.droppableId == 2){
            setOrderInProggres(removeItemById(draggableId, orderInProggres));
        }
        else if (source.droppableId == 3){
            setOrderWatting(removeItemById(draggableId, orderInWatting));
        }
        const order = findItemById(draggableId, [...orderDone, ...orderInProggres, ...orderInWatting]);
        if (destination.droppableId == 1) {
            order.order_status = "DONE"
            setOrderDone([{ ...order}, ...orderDone]);
            changeOrderDone(order.order_id)
            // create list with items that should disapire ? 
            // create setTimeout(()=>{client.get(`/kitchen/is_done/${order.order_id}`)},600)
        } else if(destination.droppableId == 2){
            order.order_status = "IN_PROGRESS"
            changeOrderInProgress(order.order_id)
            setOrderInProggres([{ ...order}, ...orderInProggres]);
        } else if(destination.droppableId == 3){
            order.order_status = "WAITTING"
            changeOrderWaiting(order.order_id)
            setOrderWatting([{ ...order}, ...orderInWatting]);
        }
    };
    
    function findItemById(id, array) {
        return array.find((item) => item.order_id == id);
    }
    
    function removeItemById(id, array) {
        return array.filter((item) => item.order_id != id);
    }
  
    if(dataUserStatus){
        return (
            <div className="KitchenOrders">
                <LogoutButton client={client}></LogoutButton>
                
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
                </DragDropContext>
                <OrderCount waitingOrders={orderInWatting} inProgressOrders={orderInProggres}></OrderCount>
        
            </div>
        );
    }
    else{
        navigate('../login/', {replace: true})
    }
}