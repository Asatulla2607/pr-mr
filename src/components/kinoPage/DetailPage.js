
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../ApiKey/index";


const DetailPage = () =>{
    const [detail,setDetail] = useState({});
    const {id} = useParams();
    const getDetailPage = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        setDetail(data)
    } 
    useEffect(()=>{
        getDetailPage()
    },[])
    return(
        <div id="detail">
            <div className="container">
                <div className="detail">
                    {
                        <div>
                            <img src={`https://media.themoviedb.org/t/p/w220_and_h330_bestv2/${detail.poster_path}`}/>
                            <h1>asat</h1>
                        </div>
                    }
                </div>
            </div>
        </div>  
    ) 
    
}

export default DetailPage;

