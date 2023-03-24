import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const handleMousedown = (e) => {
      if (!inputRef.current.contains(e.target)) {
        if (amount !== "") {
          let formatted = amount.replace(/[^\d.]/g, "");
          setAmount(`$${parseFloat(formatted).toFixed(2)}`);
        }
      }
    };

    window.addEventListener("click", handleMousedown);

    return () => {
      window.removeEventListener("click", handleMousedown);
    };
  });

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={amount}
        onChange={(event) => {
          setAmount(event.currentTarget.value);
        }}
        placeholder="Enter amount..."
      />
    </div>
  );
}

export default App;

