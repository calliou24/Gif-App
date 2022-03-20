import React from "react";
import { GifComponent } from "../GifComponent/GifComponent";
import { useFetchGifs } from "../../hooks/useFetchGifs";

import styles from './gif-grid.module.css'

export const GifGrid = ({ category, deleteCategory }) => {
  const { data, loading } = useFetchGifs(category);
  //use effect nos permite ejecutar algo una sola vez al renderizar el componente
  //de manera que este no esta cambiando y haciendo la funcion cada que se actualizar
  //por ejemplo en un useState, entrando en un bucle
  //la funcion que se necestia aqui con el nombre getData esta almacenada en una carpeta
  //para poder modularizar nuestro archivo

  return (
    <div className={styles.gifCategory}>
      <div className={styles.titleCont}>  
      {loading
          ? "Loading..."
          : <h2 className={styles.title}>
        {category && category}
      </h2>}
      <button className={styles.deleteCat} onClick={() => deleteCategory(category)}> delete </button>
      </div>
      <ul className={styles.listGrid}>
        {data.map(({ id, title, url }) => (
              <GifComponent key={id} title={title} url={url} />
            ))}
      </ul>
    </div>
  );
};