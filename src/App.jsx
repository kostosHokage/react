import React, { StrictMode } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Generate from "./components/Generate";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <HashRouter>
          <Generate />
        </HashRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
