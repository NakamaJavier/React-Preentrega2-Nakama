import {useState,useEffect} from 'react'

function useFetch(url) {
    const [data,setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isMounted, setIsMounted] = useState(true);
    async function fetchData(link) {
        try{
            const response = await fetch(link)
            if(!response.ok){
                throw new Error("Error en la respuesta de la API")
            }
            const data = await response.json()
            if (!data) {
                throw new Error("Error al parsear los datos");
            }
            return data
        } catch(error){
            console.log("Error al obtener los datos:",error.message)
        }
    }
    useEffect(()=>{
        setLoading(true)
        setTimeout(async () => {
            const fetchedData = await fetchData(url)
            if(isMounted){
                setData(fetchedData)
                setLoading(false)
            }
        },0) //si se cambia el valor del 0 se puede simular un retardo en la request
        return (()=>{
            setIsMounted(false)})
    },[url,isMounted])
    return {data, loading}

}

export default useFetch