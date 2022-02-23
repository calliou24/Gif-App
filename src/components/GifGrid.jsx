import React,{ useState, useEffect } from 'react'
import { GifComponent } from './GifComponent/GifComponent'
import { useFetchGifs } from '../hooks/useFetchGifs'
export const GifGrid = ({category}) => {

  const {data, loading} = useFetchGifs( category ) 
    //use effect nos permite ejecutar algo una sola vez al renderizar el componente
    //de manera que este no esta cambiando y haciendo la funcion cada que se actualizar 
    //por ejemplo en un useState, entrando en un bucle
    //la funcion que se necestia aqui con el nombre getData esta almacenada en una carpeta
    //para poder modularizar nuestro archivo
  return (
    <div className='gif-grid'>
        <h2 className='gif-grid-title animate__animated animate__flipInX'>{category}</h2>
        <ul className='ul-gif-grid'>
            {loading ? "Loading..." : data.map( ({id,title,url}) => 
              <GifComponent 
                  key={id}
                  title={title}
                  url={url}
              />)}
        </ul>
    </div>
  )
}
