import React from "react";
import styles from "./SizeInput.module.scss";
import { ISizeInputProps } from "../plannerTypes/plannerTypes";

export default function SizeInput({ label, value, setValue }: ISizeInputProps) {
  return (
    <>
      <span>
        {label}: {value}
      </span>
      <input
        type="range"
        min="2"
        max="20"
        value={value}
        className={styles.slider}
        onChange={(e) => setValue(+e.target.value)}
      />
    </>
  );
}
