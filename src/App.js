import logo from './logo.svg';
import './App.css';
import Movies from "./components/Movies";
import React from 'react';



function App() {

const moviesArr = [
  {
    "name": "Boondock Saints",
    "year": 1999,
    "rating": "R",
    "image": "https://m.media-amazon.com/images/I/51mS+8y4RKL._AC_UF894,1000_QL80_.jpg"
  },
  {
    "name": "Old School",
    "year": 2003,
    "rating": "R",
    "image": "https://m.media-amazon.com/images/I/71ASmHF9qsL._AC_UF894,1000_QL80_.jpg"
  },
  {
    "name": "Training Day",
    "year": 2001,
    "rating": "R",
    "image": "https://i.pinimg.com/736x/e2/bd/78/e2bd783d64a727c8a0fd67d7941588e5.jpg"
  },
  {
    "name": "Bad Santa",
    "year": 2003,
    "rating": "R",
    "image": "https://images2.vudu.com/poster2/398170-338"
  },
  {
    "name": "Jurassic Park",
    "year": 1993,
    "rating": "PG-13",
    "image": "https://i.etsystatic.com/23402008/r/il/c44db4/3302687299/il_570xN.3302687299_icel.jpg"
  }
]

  return (
    <div className="App">
      <Movies moviesArr={moviesArr}/>
    </div>
  );
}

export default App;





