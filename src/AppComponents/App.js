import Calculator from "./CalculatorComponents/Calculator";
import styles from "./App.module.css";
import Result from "./ResultComponents/Result";

function App() {
  return (
    <>
      <h1 className={styles.heading}>
        SPLI
        <br />
        TTER
      </h1>
      <div className={styles.App}>
        <Calculator />
        <Result />
      </div>
    </>
  );
}

export default App;
