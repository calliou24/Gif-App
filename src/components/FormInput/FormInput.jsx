import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./form.module.css";

export const FormInput = ({ add, reset }) => {
  const [targetValue, setTargetValue] = useState("");
  //important that this use state have the argument of an Empty String of something
  //we dont want to have a undefined props inside our component

  function setValue(e) {
    setTargetValue(e.target.value);
  }

  function sendValue(e) {
    e.preventDefault();
    add(targetValue);
    setTargetValue("");
  }

  function setTargetValueReset(e) {
    e.preventDefault();
    reset();
  }
  return (
    <form className={styles.form} onSubmit={(e) => sendValue(e)}>
      <div className={styles.inputCont}>
        <input
          className={styles.searchBar}
          onChange={(e) => setValue(e)}
          placeholder="Search"
          value={targetValue}
        />
        <p id="p" className={styles.textReflect}>
          {targetValue.length < 20 ? (
            targetValue
          ) : (
            <p style={{ color: "red" }}>Too many characters!</p>
          )}
        </p>
      </div>
      <div className={styles.btnCont}>
        <button type="submit" className={styles.btn}>
          ADD
        </button>
        <button
          onClick={(e) => setTargetValueReset(e)}
          type="submit"
          className={styles.btn}
        >
          DEFAULT
        </button>
      </div>
    </form>
  );
};

FormInput.propTypes = {
  add: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
