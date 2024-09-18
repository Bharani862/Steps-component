import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [testData, setTestData] = useState({ name: "Bharanidharan M" });
  function handleInc() {
    if (step < messages.length) {
      setStep((curr) => (curr += 1));
      // console.log(step);
      // setStep((curr) => (curr += 1));
    }
  }

  function handleDecrement() {
    if (step > 1) {
      setStep((curr) => (curr -= 1));
      // setStep(step - 1);
      // console.log(step);
      // setStep(step - 1);
    }

    // testData.name = "Bharani";
  }

  function handleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="close" onClick={handleModal}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step === 1 && "active"}`}>1</div>
            <div className={`${step === 2 && "active"}`}>2</div>
            <div className={`${step === 3 && "active"}`}>3</div>
          </div>

          <p className="message">
            {" "}
            Step {step}: {messages[step - 1]}
            {/* {testData.name} */}
          </p>

          <div className="buttons">
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={() => handleDecrement()}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={() => handleInc()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
