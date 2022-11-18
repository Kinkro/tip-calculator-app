import styles from "./InputComponent.module.css";

function InputComponent({ name, imgurl }) {
  console.log(name);
  return (
    <div className={styles.wrapper}>
      <img className={styles.dollarImg} src={imgurl} alt="$" />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
      <br />
      <input
        className={styles.input}
        dir="rtl"
        placeholder={0}
        type="number"
        name="bill"
        id="bill"
      />
    </div>
  );
}

export default InputComponent;
