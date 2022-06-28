import "./styles.css";
import React, { createContext } from "react";
import ComponentA from "./ComponentA";

const FirstName = createContext();
const LastName = createContext();
const App = () => {
  return (
    <FirstName.Provider value={"Vivek"}>
      <LastName.Provider value={"Verma"}>
        <ComponentA />
      </LastName.Provider>
    </FirstName.Provider>
  );
};
export default App;
export { FirstName, LastName };
