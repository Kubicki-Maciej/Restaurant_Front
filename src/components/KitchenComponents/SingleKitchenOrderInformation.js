import { WindowWraper, OrderIdText, StatusText, HeaderWindowOrder } from "./style/SingleKitchenOrderInformationElements"

export default function SingleKitchenInformation({order_id, order_status, meal}){
    
    function getColor(){
        if(order_status=='DONE'){
            return 'green'
        }
        else if(order_status="WAITING"){
            return 'yellow'
        }
        else if(order_status="ON_PROGRESS"){
            return 'green'
        }
    }
    let color = getColor()
    
    // FIND BETTER SOLUTION
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    return(
        <WindowWraper key={order_id}>
            <HeaderWindowOrder bg={color}>
                <OrderIdText >Order id: {order_id}</OrderIdText>
                <StatusText >status: {order_status}</StatusText>
            </HeaderWindowOrder>
            <ul>

            {meal.map(({meal_name, number_of_meals, comments}) =>
                (<li className="element_order" key={order_id+meal_name+getRandomInt(1000)}>   {/* FIND BETTER SOLUTION key */} 
                    <p className="meal_name">Name: {meal_name}</p>
                    <p className="number_of_meals">Count: {number_of_meals}</p>
                    {comments ? <p className="comments">Comments: {comments}</p>:''}
                </li>)
            )}
            
            </ul>
        </WindowWraper>
    )
}