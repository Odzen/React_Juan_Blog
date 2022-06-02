
//Custom Hook for fetching data, it has to start with the word 'use'

import {useEffect, useState} from "react";


const useFetch= (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // the empty [] dependency array marks that it won't run if the state changes
    useEffect( () => {
        async function fetchData(){
            try{
                const res = await fetch(url);
                if (!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                const data = await res.json();
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            }catch (e) {
                setIsPending(false);
                setError(e.message);
            }
        }
        fetchData();
        console.log("Use Effect");
    }, [url]);

    return {data, isPending, error};
};

export default useFetch;