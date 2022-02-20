import React,{ useState, useEffect } from 'react'
import { GifComponent } from './GifComponent/GifComponent'

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])
 
    const getData = async () =>{     
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=6&api_key=TOH7KYyn452h30J4PokPr9IC8piozssx`;
    const resp = await fetch(url)
    const {data} = await resp.json();
    const gifs = data.map( ({id, title, images}) => {
        return {
            id : id,
            title : title,
            url :images.fixed_width_downsampled.url
    }});
    setImages(gifs)
    
  }   
  useEffect(() => {
    getData()
  },[])
    //use effect nos permite ejecutar algo una sola vez al renderizar el componente
    //de manera que este no esta cambiando y haciendo la funcion cada que se actualizar 
    //por ejemplo en un useState, entrando en un bucle
  
  return (
    <div className='gif-grid'>
        <h2 className='gif-grid-title'>{category}</h2>
        <ul className='ul-gif-grid'>
            {images.map( ({id,title,url}) => 
              <GifComponent 
                  key={id}
                  title={title}
                  url={url}
              />)}
        </ul>
    </div>
  )
}
