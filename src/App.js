import React from 'react';
import './App.css';
import ListOfGifs from './components/lisfOfGifs/ListOfGifs';
import {Link, Route} from "wouter"
import Home from './pages/home/home'
//import getGifs from './services/getGifs';


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="\">
            <h1 className='titulo'>GIF APP</h1>
          </Link>
          
        <Route
        component={ListOfGifs}
        path="/gif/:keyword"
        />

        <Route
        component={Home}
        path="/"
         />

      </section>
    </div>
  );
}

export default App;
