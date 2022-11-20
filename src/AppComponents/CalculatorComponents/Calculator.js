import styles from "./Calculator.module.css";
import InputComponent from "./InputComponent";
import SelectTip from "./SelectTip";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";

function Calculator() {
  return (
    <div className={styles.container}>
      <InputComponent name="Bill" imgurl={dollarIcon} />
      <SelectTip />
      <InputComponent name="Number of People" imgurl={personIcon} />
      {/* <Custom />
      <InputComponent /> */}
    </div>
  );
}

export default Calculator;
