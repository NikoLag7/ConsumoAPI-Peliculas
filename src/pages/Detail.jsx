import React, { useEffect, useState } from 'react'
import styles from'./Detail.module.css'
import { useParams } from 'react-router-dom';
import { get } from '../util/CallApi';
import Spinner from '../Components/Spinner';




function Detail() {
 
  const [Movie, setMovie]= useState(null);
  const {moviesId} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(()=>{
      setIsLoading(true);
      get('/movie/' + moviesId).then( (data) => { 
      setIsLoading(false);
        setMovie(data);
      }
    );
  }, [moviesId] );
    
    if(isLoading){
      return <Spinner/>;
    }

    if(!Movie){ 
      return null;
    }
  
    const Imagenes= "https://image.tmdb.org/t/p/w400/" + Movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}` } src={Imagenes} alt={Movie.title}></img>
      <div className={`${styles.col} ${styles.detail}` }>
        <p><strong>Titulo:</strong> {Movie.title}</p>
        <p><strong>Generos:</strong>  {Movie.genres.map(genre =>genre.name ).join(", ")}</p>
        <p><strong>Descripción:</strong> {Movie.overview}</p>
      </div>
    </div>
  )
}

export default Detail