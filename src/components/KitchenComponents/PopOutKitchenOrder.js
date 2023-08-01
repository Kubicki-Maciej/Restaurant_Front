import { WindowWraper, OrderIdText, StatusText, HeaderWindowOrder } from "./style/SingleKitchenOrderInformationElements"
import OrderButtonContainer from "./OrderButtonConteiner"
export default function SingleKitchenOrderInformationWithButton({order_id, order_status, meal}){
    
    
    function getColor(){
        if(order_status=='DONE'){
            return '#39FF84'
        }
        else if(order_status=="WAITING"){
            return '#FFC239'
        }
        else if(order_status=="IN_PROGRESS"){
            return '#D9FF39'
        }
    }
    
    let color = getColor()
    return(
        <WindowWraper key={order_id}>
            <HeaderWindowOrder bg={color}>
                <OrderIdText >Order id: {order_id}</OrderIdText>
                <StatusText >status: {order_status}</StatusText>
            </HeaderWindowOrder>
            <ul>
            {meal.map(({meal_name, number_of_meals, comments}) =>
                (<li className="element_order" key={meal_name+'/'+order_id+'/'+number_of_meals}>
                    <p className="meal_name">Name: {meal_name}</p>
                    <p className="number_of_meals">Count: {number_of_meals}</p>
                    {comments ? <p className="comments">Comments: {comments}</p>:''}
                </li>)
            )}
            </ul>
            <OrderButtonContainer api_url={'http://127.0.0.1:8000/kitchen/change_order_done/'} order_id={order_id} button_name={"Done"}/>
            <OrderButtonContainer api_url={'http://127.0.0.1:8000/kitchen/change_order_in_progress/'} order_id={order_id} button_name={"In Progress"}/>
        </WindowWraper>
    )
}