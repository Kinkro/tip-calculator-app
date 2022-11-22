import Percent from "./Percent";
import styles from "./SelectTip.module.css";

const tipsNumbers = [5, 10, 15, 20, 50, "input"];

function SelectTip({ bill, people, setTotal, total, custom, setCustom }) {
  return (
    <div>
      <h2 className={styles.heading}>Select Tip %</h2>
      <div className={styles.container}>
        {tipsNumbers.map((item) => (
          <Percent
            num={item}
            key={item}
            bill={bill}
            people={people}
            setTotal={setTotal}
            total={total}
            value={custom}
            setCustom={setCustom}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectTip;
