import React from 'react'
import styles from "./Card.module.css"
import { Link } from 'react-router-dom'

function Card({movie}) {
    const Imagenes= "https://image.tmdb.org/t/p/w300/" + movie.poster_path
    return (
        
        <li className={styles.ejemplo}>
            <Link to={"/detail/" + movie.id}>
                <img width={230} height={345} className={styles.movieImage} src={Imagenes} alt="a" />
                <div className='titulos'>{movie.title}</div>
            </Link>
        </li>
  )
}

export default Card