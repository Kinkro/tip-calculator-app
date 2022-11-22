import styles from "./PerPerson.module.css";

function PerPerson({ number, name }) {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>{name}</h2>
        <p className={styles.person}>/ person</p>
      </div>
      <div className={styles.total}>
        ${typeof number === "number" ? number.toFixed(2) : 0}
        {/* {parseInt(number).toFixed(2)} */}
      </div>
    </div>
  );
}

export default PerPerson;
