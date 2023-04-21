import React from 'react'
import "./Home.css"
import Peliculas from './../Components/Peliculas/Peliculas'
import { Link } from 'react-router-dom'

function Home({titulo,children}) {
  return (
    <div>
      <header><h1>Peliculas</h1></header>
      
      <main><Peliculas/></main>
    </div>
  )
}

export default Home