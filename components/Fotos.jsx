'use client'
import '../components-styles/Fotos.css';
import {useState} from 'react';
import Link from 'next/link'

function Fotos(props){

  // const fotos = [estado, setEstado] = props.useState(estado);

  // const movimiento = ()=>{
  //   return setEstado
  // }

  return(
    <div className="contenedor-principal-imagenes">

      <div className="contenedor-foto">
        <a href="/productos">
          <img 
            src = {props.image}
            alt= {props.referencia} 
          />
        </a>
      </div>
      
      <div className='titulo-foto'>
          <h3>
            {props.title}
          </h3>
        </div>
    </div>
  )
}

export default Fotos;