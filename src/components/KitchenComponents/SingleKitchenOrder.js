import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SingleKitchenInformation from './SingleKitchenOrderInformation';
import SingleKitchenOrderInformationWithButton from './PopOutKitchenOrder';
import {PopOutWindow, ListOrderElement} from "./style/SingleKitchenOrderElements"
import {Draggable} from 'react-beautiful-dnd'





export default function SingleKitchenOrder({order, index}){
// export default function SingleKitchenOrder({order_id, order_status, meal, index}){
    
    return (
        <Draggable key={order.order_id} draggableId={`${order.order_id}`} index={index}>
            {(provaided, snapshot) =>(
                <ListOrderElement 
                {...provaided.draggableProps}
                 {...provaided.dragHandleProps}
                ref={provaided.innerRef}
                isDragging={snapshot.isDragging}
                >
                    
                    <Popup trigger={
                        <PopOutWindow>

                        <SingleKitchenInformation 
                        order_id={order.order_id}
                        order_status={order.order_status} 
                        meal={order.meal}
                        key={order.order_id+"order"}/> 
                        </PopOutWindow>
                        }
                        position="center center"
                        closeOnDocumentClick
                    >
                            <SingleKitchenOrderInformationWithButton 
                            order_id={order.order_id}
                            order_status={order.order_status} 
                            meal={order.meal}/>
                    </Popup>
                </ListOrderElement>
            )}
        </Draggable>
    )
}




