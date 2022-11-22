import styles from "./Calculator.module.css";
import InputComponent from "./InputComponent";
import SelectTip from "./SelectTip";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";
// import { useState } from "react";

function Calculator({
  // zero,
  // setZero,
  bill,
  setBill,
  people,
  setPeople,
  setTotal,
  custom,
  setCustom,
}) {
  const tipChange = (e) => {
    const { value } = e.target;
    setPeople(Number(value) > 0 ? Number(value) : "");
  };
  const billChange = (e) => {
    const { value } = e.target;
    setBill(Number(value) > 0 ? Number(value) : "");
  };

  return (
    <div className={styles.container}>
      <InputComponent
        name="Bill"
        imgurl={dollarIcon}
        change={billChange}
        value={bill}
      />
      <SelectTip
        bill={bill}
        people={people}
        setTotal={setTotal}
        custom={custom}
        setCustom={setCustom}
        // value={custom}
      />
      <InputComponent
        name="Number of People"
        imgurl={personIcon}
        // zero={zero}
        // setZero={setZero}
        change={tipChange}
        value={people}
      />
    </div>
  );
}

export default Calculator;
