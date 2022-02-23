import React from 'react'

export const GifComponent = ({title,url}) => {


  return (
    <li className='animate__animated animate__bounceInLeft' onClick={()=>{
      navigator.clipboard.writeText(url)
      }}>
        <div className='image-cont'><img  src={url} alt={title}></img></div>
        <div><p>{title}</p></div>
    </li>
  )
}
