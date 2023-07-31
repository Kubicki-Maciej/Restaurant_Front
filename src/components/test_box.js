import ChangeOrderToDone from "./post_test"
import { useState, useEffect } from "react";
export default function SendTest({box_object, box_color, order_id}) {
    
    function ChangeOrderToDone(id){
        fetch(`http://127.0.0.1:8000/kitchen/test_order_done/${id}`)
    }

    return <div className="Box" style={{background: `${box_color}`}}>
        
        <h1>TUTAJ POWINIEN BYC BOX {box_object} </h1>
        <button onClick={()=>{ 
            console.log('kliknieto');
            ChangeOrderToDone(order_id)
        }}>order_done</button>
    </div>
} 

// https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples  