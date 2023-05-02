import React from "react";
import './Gif.css'
export default function Gif({title, url, id}){
    return(
    <a href={`#${url}`} className='Gif'>
        <h4>{title}</h4>
        <img src={url} alt="foto del gif" />
    </a>
    )
   
}