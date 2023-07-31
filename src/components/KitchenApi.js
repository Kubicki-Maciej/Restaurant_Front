import { useState, useEffect } from "react";


export default function KitchenApi() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/kitchen/test/`)
            .then((response) => response.json())
            .then((actualData) => setData(actualData))
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    console.log(data)

    return <div className="KitchenOrders">
        
        {loading && <div>Loading orders please wait...</div>}
        {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul className="orders_table">
            {data && 
                data.map(({order_id,order_status,meal}) =>
                (<li className="kitchen_order_list" key={order_id}>
                    <p>Order id: {order_id}</p>
                    <p>status: {order_status}</p>
                    <ul>
                    {meal.map(({meal_name, number_of_meals, comments}) =>
                        (<li className="element_order">
                            <p className="meal_name">Name: {meal_name}</p>
                            <p className="number_of_meals">Count: {number_of_meals}</p>
                            {comments ? <p className="comments">Comments: {comments}</p>:''}
                        </li>)
                    )}
                    </ul>
                </li>))
            }
        </ul>
    </div>;

}