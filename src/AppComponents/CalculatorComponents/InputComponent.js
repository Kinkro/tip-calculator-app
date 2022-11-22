import styles from "./InputComponent.module.css";
// import { useState, useEffect } from "react";

function InputComponent({ name, imgurl, change, value }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <label className={styles.label} htmlFor={name}>
          {name}
        </label>
      </div>
      <div className={styles.inputContainer}>
        <img className={styles.icon} src={imgurl} alt="$" />

        <input
          className={styles.input}
          dir="rtl"
          placeholder="0"
          type="number"
          name={name}
          value={value}
          id={name}
          onChange={change}
        />
      </div>
    </div>
  );
}

export default InputComponent;
