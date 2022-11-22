import styles from "./Percent.module.css";

function Percent({ num, bill, setTotal, setCustom, value }) {
  return (
    <div
      className={styles.container}
      onClick={() => {
        const total = parseInt(bill * num) / 100 + bill;
        setTotal(total);
      }}
    >
      {num === "input" ? (
        <input
          type="number"
          className={styles.input}
          placeholder="Custom"
          dir="rtl"
          value={value}
          onChange={(e) => {
            setCustom(
              parseFloat(e.target.value) > 0 ? parseFloat(e.target.value) : ""
            );
            const total2 = (bill * parseInt(e.target.value)) / 100 + bill;
            setTotal(total2);
          }}
          onClick={(e) => {
            num = parseInt(e.target.value);
          }}
        />
      ) : (
        `${num}%`
      )}
    </div>
  );
}

export default Percent;
