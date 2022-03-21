import React from "react";
import { PropTypes } from "prop-types";

import styles from "./gif-component.module.css";


import { CopyToClipboard } from "react-copy-to-clipboard";

export const GifComponent = ({ title, url, toast }) => {
  return (
    <CopyToClipboard text={url}>
      <li className={styles.item} onClick={() => toast('Copied Text')}>
        <img src={url} alt={title}></img>
      </li>
    </CopyToClipboard>
  );
};

GifComponent.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
