import styles from "./PerPerson.module.css";

function PerPerson() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>Tip Amount</h2>
        <p className={styles.person}>/ person</p>
      </div>
      <div className={styles.total}>${0.01}</div>
    </div>
  );
}

export default PerPerson;
