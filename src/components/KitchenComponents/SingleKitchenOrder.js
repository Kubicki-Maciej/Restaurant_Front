import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SingleKitchenInformation from './SingleKitchenOrderInformation';
import SingleKitchenOrderInformationWithButton from './SingleKitchenOrderInformationWithButton';
import {PopOutWindow, ListOrderElement} from "./style/SingleKitchenOrderElements"
import {Draggable} from 'react-beautiful-dnd'

export default function SingleKitchenOrder({order_id, order_status, meal, index}){
    return (
        <Draggable key={order_id} draggableId={String(order_id)} index={index}>
            {(provaided) =>(
                <ListOrderElement {...provaided.draggableProps} {...provaided.dragHandleProps} ref={provaided.innerRef}>
                    
                    <Popup trigger={
                        <PopOutWindow>

                        <SingleKitchenInformation 
                        order_id={order_id}
                        order_status={order_status} 
                        meal={meal}
                        key={order_id+"order"}/> 
                        </PopOutWindow>
                        }
                        position="center center"
                        closeOnDocumentClick
                    >
                            <SingleKitchenOrderInformationWithButton 
                            order_id={order_id}
                            order_status={order_status} 
                            meal={meal}/>
                    </Popup>
                </ListOrderElement>
            )}
        </Draggable>
    )
}




