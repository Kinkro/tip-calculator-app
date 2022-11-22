import Calculator from "./CalculatorComponents/Calculator";
import styles from "./App.module.css";
import Result from "./ResultComponents/Result";
import { useState } from "react";

function App() {
  // const [zero, setZero] = useState(false);
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [total, setTotal] = useState("");
  let [custom, setCustom] = useState("");

  return (
    <>
      <h1 className={styles.heading}>
        SPLI
        <br />
        TTER
      </h1>
      <div className={styles.App}>
        <Calculator
          // zero={zero}
          // setZero={setZero}
          bill={bill}
          setBill={setBill}
          people={people}
          setTotal={setTotal}
          setPeople={setPeople}
          custom={custom}
          setCustom={setCustom}
        />
        <Result
          bill={bill}
          total={total}
          people={people}
          setBill={setBill}
          setPeople={setPeople}
          setTotal={setTotal}
          custom={custom}
          setCustom={setCustom}
        />
      </div>
    </>
  );
}

export default App;
