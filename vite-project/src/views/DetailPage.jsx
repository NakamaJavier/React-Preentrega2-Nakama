import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ItemDetail from '../components/ItemDetail/ItemDetail'

const DetailPage = () => {
  let {id} = useParams()
  const {data,loading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(id)+1}`)

  useEffect(()=>{
    if(data)
      console.log(data)
  },[data])

    if (loading){
      return  <div>Loading...</div>
    }
  
  return (
    data &&
    <ItemDetail data= {data}/>
  )
}

export default DetailPage