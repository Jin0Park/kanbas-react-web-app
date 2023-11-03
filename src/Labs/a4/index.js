import Add from "./Add";
import ClickEvent from "./ClickEvent";
import ParsingDataOnEvent from "./ParsingDataOnEvent"
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables"
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import React from "react";
import ReduxExamples from "./ReduxExamples";


function Assignment4() {
    function sayHello() {
        alert("Hello");
      }
    
      return (
        <div>
          <h1>Assignment 4</h1>
          <ReduxExamples />
          <ParentStateComponent />
          <ArrayStateVariable />
          <ObjectStateVariable />
          <DateStateVariable />
          <StringStateVariables />
          <BooleanStateVariables />
          <Counter />
          <EventObject />
          <PassingFunctions
            theFunction={() => {
              alert("Life is Good!");
              sayHello();
            }}
          />
          <ParsingDataOnEvent />
          <ClickEvent />
          <Add a={1} b={2} />
          {Add({ a: 1, b: 2 })}
        </div>
      );
}
export default Assignment4;