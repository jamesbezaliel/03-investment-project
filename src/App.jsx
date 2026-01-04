import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

const INPUT_DATA = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [inputUserData, setInputUserData] = useState(INPUT_DATA);
  const isValidInput = inputUserData.duration > 0;

  function handleChangeInput(event, field) {
    setInputUserData((prevInputData) => ({
      ...prevInputData,
      [field]: Number(event.target.value),
    }));
  }

  return (
    <>
      <Header />
      <UserInput
        inputData={inputUserData}
        handleChangeInput={handleChangeInput}
      />
      {!isValidInput && <p className="center">Duration must be greater than 0.</p>}
      {isValidInput && <Result userInput={inputUserData} />}
    </>
  );
}

export default App;
