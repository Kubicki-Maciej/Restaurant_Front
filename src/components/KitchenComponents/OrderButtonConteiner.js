import { useState, useEffect } from "react";


export default function OrderButtonContainer({order_id, api_url, button_name}){
    const [data, setData] = useState({data: []});
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const id = order_id
    
    const handleOrderIsDoneClick =  async () =>{
        setIsLoading(true);
        console.log(`zostala wywolana funkcja change order ${id}`);

        try{
            const response = await fetch(`${api_url}${id}`);
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        }catch (err){
            setErr(err.message);
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <div>
            {err && <h2>{err}</h2>}
            <button onClick={handleOrderIsDoneClick}>{button_name}</button>
        </div>
    )
}
