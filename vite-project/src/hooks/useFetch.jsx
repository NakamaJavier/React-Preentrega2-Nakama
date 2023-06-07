import {useState,useEffect} from 'react'

function useFetch(url) {
    const [data,setData] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData(link) {
        try{
            const response = await fetch(link)
            if(!response.ok){
                throw new Error("Error en la respuesta de la API")
            }
            const data = await response.json()
            return data
        } catch(error){
            console.log("Error al obtener los datos:",error.message)
        }
    }
    useEffect(()=>{
        const fetchDataAsync = async () => {
            const fetchedData = await fetchData(url)
            setData(fetchedData)
            setLoading(false)
        }
        fetchDataAsync();
    },[url])

    return {data, loading}

}

export default useFetch