import image from "../src/assets/investment-calculator-logo.png";
import UserInput from "./components/User-Input";
import Results from "./components/Results";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      };
    });
  }
  return (
    <>
      <div id="header">
        <img src={image}></img>
        <h1>React Investment Calculator</h1>
      </div>
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than zero </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
