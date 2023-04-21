import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { get } from '../../util/CallApi';
import Card from '../Card/Card'
import styles from "./Peliculas.module.css"

function Peliculas() {
/*  
  const [Movies , setMovies] =useState();
  useEffect(()=>[])
*/ 
  const [Movies , setMovies] = useState([0]);

  useEffect(()=>{    
    get('/discover/movie').then( (data) => { setMovies(data.results); } )
  },[]
  );

  return (
    <div >
      <ul className={styles.grid}>
        {Movies.map((movie)=> <Card key={movie.id} movie={movie}/> )}
      </ul>
    </div>
  )
}

export default Peliculas