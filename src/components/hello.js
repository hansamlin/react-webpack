import { useState } from "react";
import Select from "./select";
import styles from "./hello.module.css";

const Hello = () => {
  const [value, setValue] = useState("react");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>
        Hello <span className={styles.upper}>{value}</span>!!!
      </h1>
      <Select id={styles.select} value={value} handleChange={handleChange} />
    </>
  );
};

export default Hello;
