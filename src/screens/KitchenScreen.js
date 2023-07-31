
import KitchenOrders from "../components/KitchenComponents/KitchenOrders"

import { OrderListWraped } from "./style/KitchenScreenElements"
export default function KitchenScreen(){
    
    return(
        
            <OrderListWraped>
                <KitchenOrders />
            </OrderListWraped>
        
    )
}