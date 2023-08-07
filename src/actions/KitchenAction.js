// export const loadOrderKitchenData = () =>{

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     useEffect(() => {
//         fetch(`http://127.0.0.1:8000/kitchen/test/`)
//             .then((response) => response.json())
//             .then((actualData) => setData(actualData))
//             .catch((err) => {
//                 setError(err.message);
//                 setData(null);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);
    
//     localStorage.setItem('KitchenOrders', JSON.stringify(data))
// }

