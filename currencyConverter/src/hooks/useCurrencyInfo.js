import { useEffect, useState } from "react";

// Our Hooks are use built in hooks --- enhanced a power

const [data, setData] = useState({});

function useCurrencyInfo(currency){
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
`)
.then((res) => res.json())
.then((res) => setData(res[currency]))
    }, [currency])

    return data
}

export default useCurrencyInfo;

// this is phase one of project is done 
