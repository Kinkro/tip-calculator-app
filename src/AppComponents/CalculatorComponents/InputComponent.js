import styles from "./InputComponent.module.css";
// import { useState, useEffect } from "react";

function InputComponent({ name, imgurl }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.dollarImg} src={imgurl} alt="$" />
      <div className={styles.textContainer}>
        <label className={styles.label} htmlFor={name}>
          {name}
        </label>
      </div>
      <input
        className={styles.input}
        dir="rtl"
        placeholder="0"
        type="number"
        name="bill"
        id="bill"
      />
    </div>
  );
}

export default InputComponent;
