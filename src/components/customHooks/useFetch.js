import { useEffect, useState } from "react";


const useFetch = (url, filter = 'all') => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        setIsPending(true);
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setData(data)
            setIsPending(false)
        })
        .catch(err => console.log(err))
    }, [filter])

    if(filter !== 'all'){
        setData(data.filter(el => el.type === filter));
    }


    return {data, isPending};
}
 
export default useFetch;