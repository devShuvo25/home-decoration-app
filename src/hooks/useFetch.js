import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = () => {
    const [products,setProducts] = useState([]);
    const [loadiing,setLoading] = useState(true)
    const [err,setErr] = useState('')
    useEffect(() => {
        setLoading(true);
        axios('./products.json')
        .then(data => setProducts(data.data))
        .catch(err => setErr(err))
        .finally(setLoading(false))
    },[])
    return [products,loadiing,err];

}
export default useFetch;