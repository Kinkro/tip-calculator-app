import styles from "./Calculator.module.css";
import InputComponent from "./CalculatorComponents/InputComponent";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

function Calculator() {
  return (
    <div className={styles.container}>
      <InputComponent name="Bill" imgurl={dollarIcon} />
      <InputComponent name="Select Tip %" imgurl={personIcon} />
      {/* <SelectTip />
      <Custom />
      <InputComponent /> */}
    </div>
  );
}

export default Calculator;
