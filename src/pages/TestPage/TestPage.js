import React from "react";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import "./TestPage.scss";

export const TestPage = ({ handleComplete }) => {
  return (
    <div className="test">
      <div className="header">
        <h1>TEST PAGE</h1>
        <button onClick={() => handleComplete()}>Complete</button>
      </div>
      {/* PUT TESTING COMPONENT IN THIS DIV*/}
      <TodoForm/>
    </div>
  );
};
