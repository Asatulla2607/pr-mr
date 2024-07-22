import axios from "axios";
import React, { useEffect, useState } from "react";
import APIKEY from './ApiKey/index.js'
import MoviesCard from '../components/kinoPage/MoviesCard.js'

const TopRated = () =>{
    const [topRated,setTopRated] = useState([])
    const getTopRated = async () =>{
        const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await res
        setTopRated(data.results)
    }
    useEffect(() =>{
    getTopRated()
    },[])
    return(
        <div id="movies">
            <div className="container">
                <div className="movies">
                    {
                        topRated.map(el => <MoviesCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    )
}
export default TopRated

