import React, {useEffect, useState} from 'react';
import Gif from '../gif/Gif';
import getGifs from '../../services/getGifs';

export default function ListOfGifs({params}){

    const {keyword} = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('Efecto ejecutado')
        setLoading(true);
        getGifs({ keyword })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false);
        })
      }, [keyword]) 

      if(loading) return <i>Cargando...</i>

   return (
    <div>
        {
            gifs.map(singleGif => {
                return <Gif key={singleGif.id} title={singleGif.title} url={singleGif.url}/>
              })
        }
    </div>
   )
} 