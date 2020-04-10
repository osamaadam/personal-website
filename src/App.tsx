import React from "react";
import Home from "./pages/Home";

let repeatingText = "";
for (let i = 0; i < 500; i++) repeatingText += "Osama Adam ";

const App: React.FC = () => {
  return (
    <>
      <h1 className="repeating-background-text">{repeatingText}</h1>
      <Home />
    </>
  );
};

export default App;
