import { useEffect, useState } from "react";
import "./itemlistcontainer.css"
import Item from "../Item/Item";
import useFetch from "../../hooks/useFetch";
import {Link,useParams} from "react-router-dom"

function ItemListContainer() {
    let {typeValue} = useParams()
    const totalPokemons = 151
    const {data,loading}= useFetch (`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemons}`)
    const [pokemons, setPokemons] = useState([]);

    function fetchData(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
                }
                return response.json();
            })
            .catch(error => {
                console.log('Error al obtener los datos:', error.message);
            });
    }
    useEffect(()=>{
        if (data && data.results.length==totalPokemons){
            const urls = data.results.map(pokemon => pokemon.url)
            Promise.all(urls.map(url => fetchData(url)))
                .then(results => {
                    const pokemonData = results.map(result => result)
                    setPokemons(pokemonData)
                })
                .catch(error=>{
                    console.log('Error al obtener los datos de los Pokémon:', error.message);
                })
        }
    },[data])
    useEffect(() => {
        if (typeValue){
            console.log("El tipo de pokemon seleccionado es:", typeValue);
        }
    }, [typeValue])
    useEffect(() => {
        if (pokemons && pokemons.length>0){
            console.log("Pokemons actualizados:", pokemons);
        }
    }, [pokemons]);

    if (loading){
        return  <div>Loading...</div>
    } 
    return (
        <div className="contenedor d-flex justify-content-evenly flex-wrap  gap-3">
        { 
            pokemons &&
                typeValue!== undefined
                ? pokemons.filter(pokemon => 
                    pokemon.types.some(type=>type.type.name == typeValue))
                    .map((pokemon)=>(
                            <div  key={(pokemon.id-1)}>
                                <Link to={`/detail/${(pokemon.id-1)}`}>
                                    <Item data={pokemon}/>
                                </Link>
                            </div>
                        
                    ))
                :pokemons.map((pokemon)=>(
                    <div  key={pokemon.id-1}>
                        <Link to={`/detail/${pokemon.id-1}`}>
                            <Item data={pokemon}/>
                        </Link>
                    </div>
                
            ))}
        </div>
    )
}

export default ItemListContainer