import React, { useState, useContext } from "react";
import "./App.css";
import FormHandling from "./Components/FormHandling";
import ComponentC from "./Components/Hooks/ComponentC";
import HooksWithObject from "./Components/HooksWithObject";
import UseEffectInReact from "./Components/UseEffectInReact";
import UseOfLifeCycle from "./Components/UseOfLifeCycle";
import Header from "./Header";
// import ComponentC from './Components/Hooks/ComponentC'

// create context

const MyContext = React.createContext();

function App() {
  // const [tasks,setTasks] = useState(initialState)
  return (
    <div className="App">
      {/* <FormHandling /> */}
      {/* <UseOfLifeCycle /> */}
      {/* <UseEffectInReact /> */}
      {/* <HooksWithObject /> */}
      {/* <Header /> */}
      <MyContext.Provider value = "Madan">
        <ComponentC />
      </MyContext.Provider>
    </div>
  );
}

export default App;
