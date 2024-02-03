import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
      setUserInput((currentUserInput) => {
          return {
              ...currentUserInput,
              [inputIdentifier]: +newValue // Convert string to number using +
          };
      });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onUserInputChange={handleChange}/>
      <Results userInput={userInput} />
    </>
  );
}

export default App
