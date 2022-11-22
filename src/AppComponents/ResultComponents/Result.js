import styles from "./Result.module.css";
import PerPerson from "./PerPerson";

function Result({
  total,
  bill,
  people,
  setTotal,
  setBill,
  setPeople,
  setCustom,
}) {
  return (
    <div className={styles.container}>
      <PerPerson
        number={people && bill && total && (total - bill) / people}
        name="Tip Amount"
      />
      <PerPerson
        number={people && bill && total && total / people}
        name="Total"
      />
      <button
        className={styles.reset}
        onClick={() => {
          setTotal("");
          setBill("");
          setPeople("");
          setCustom("");
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default Result;
