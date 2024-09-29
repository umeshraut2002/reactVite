import {useEffect, useState} from 'react'


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch(`https://v6.exchangerate-api.com/v6/6ebf458022227f746569043d/latest/${currency}`);

                if(!response.ok){
                    throw new Error("Network Response Was Not Ok")
                }
                const result = await response.json();
                setData(result)
            }

            catch(err){
                setError(err)
            }
        }

        fetchData();
    },[currency])

    return (data, error);
}

export default useCurrencyInfo;