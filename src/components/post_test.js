import { useState, useEffect } from "react";



export default function ChangeOrderToDone({order_id}) {
    console.log('zostala wywolana funkcja change order ');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(`http://127.0.0.1:8000/kitchen/test_order_done/${order_id}`)
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/kitchen/test_order_done/${order_id}`)
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
} 