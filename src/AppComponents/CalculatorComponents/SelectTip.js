import Percent from "./Percent";
import styles from "./SelectTip.module.css";

const tipsNumbers = [5, 10, 15, 20, 50, "input"];

function SelectTip() {
  return (
    <div>
      <h2 className={styles.heading}>Select Tip%</h2>
      <div className={styles.container}>
        {tipsNumbers.map((item) => (
          <Percent num={item} key={item} />
        ))}
      </div>
    </div>
  );
}

export default SelectTip;
