import styles from "./Percent.module.css";

function Percent({ num }) {
  return (
    <div className={styles.container}>
      {num === "input" ? (
        <input className={styles.input} placeholder="Custom" dir="rtl" />
      ) : (
        `${num}%`
      )}
    </div>
  );
}

export default Percent;
