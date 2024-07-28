import axios from 'axios'
import React, { useEffect, useState } from 'react'
import APIKEY from '../ApiKey'

const Actor = ({id}) => {
    const [Actors,setActors] = useState([])
    const getActors = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        setActors(data)
    } 

    console.log(Actors);

    useEffect(()=>{
        getActors()
    },[])

    return (
        <div>
      
        </div>
  )
}

export default Actor;
