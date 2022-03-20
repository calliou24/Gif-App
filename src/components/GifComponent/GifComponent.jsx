import React from "react";
import { PropTypes } from "prop-types";

import styles from './gif-component.module.css'

export const GifComponent = ({ title, url }) => {
  return (
    <li className={styles.item}
      onClick={() => {
        navigator.clipboard.writeText(url);
      }}
    >
        <img src={url} alt={title}></img>
    </li>
  );
};

GifComponent.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
