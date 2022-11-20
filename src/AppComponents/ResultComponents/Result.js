import styles from "./Result.module.css";
import PerPerson from "./PerPerson";

function Result() {
  return (
    <div className={styles.container}>
      <PerPerson />
      <PerPerson />
      <button className={styles.reset}>RESET</button>
    </div>
  );
}

export default Result;
