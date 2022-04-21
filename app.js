import { useState, useEffect } from "react";
import Select from "./src/components/select";
import "./app.scss";

const App = () => {
  const [value, setValue] = useState("react");

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>
        Hello <span className="upper">{value}</span>!!!
      </h1>
      <Select value={value} handleChange={handleChange} />
    </>
  );
};

export default App;
