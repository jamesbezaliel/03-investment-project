import { useState } from "react";
import Input from "./components/input";
import Result from "./components/Result";
import Header from "./components/Header";

const initialInputData = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialInputData);

  const isValidData = userInput.duration > 0;

  function handleData(event, field) {
    setUserInput((prevData) => ({
      ...prevData,
      // [field]: Number(event.target.value),
      // or
      [field]: +event.target.value,
    }));
    // event.target.value will always return string, so if you want to do calculations later, convert it to number
  }
  return (
    <>
      <Header />
      <Input userInput={userInput} handleData={handleData} />
      {!isValidData && <p className="center">Please enter duration more than zero</p>}
      {isValidData && <Result userInput={userInput} />}
    </>
  );
}

export default App;
