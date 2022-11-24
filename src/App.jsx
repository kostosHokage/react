import React, { StrictMode } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Generate from "./components/Generate";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <BrowserRouter>
          <Generate />
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
