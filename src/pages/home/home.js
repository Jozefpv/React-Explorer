import React, {useState} from "react";
import "./home.css"
import "../../App.css"
import {Link, useLocation} from "wouter"


export default function Home(){

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        pushLocation(`/gif/${keyword}`)

    }

    const handleChange = e => {
        setKeyword(e.target.value)

    }
    return(
   <div>
          <form onSubmit={handleSubmit}>
            <input placeholder="Buscar..." onChange={handleChange} type='text' value={keyword} />
        </form>
        {
            // <div className="nav">
          //<Link className = "links" to='/gif/camel'>Gif de camellos</Link>
          //<Link className = "links" to='/gif/youtube'>Gif de youtube</Link>
          //<Link className = "links" to='/gif/island'>Gif de islas</Link>
        //</div>
        }
       
  

        <img className="inicio" src="https://raw.githubusercontent.com/StewartGF/StewartGF/master/images/react.gif"></img>
   </div>
    )
   
}