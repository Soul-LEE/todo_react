// src_07_state05_시릅문제

import logo from './logo.svg';
import './App.css';

import { useState } from 'react';




function App() {
  const [step, setStep] = useState(1);
  const [num, setNum] = useState(0);

function up(){
  setNum(num+step);
}

function down(){
  setNum(num-step>0? num-step:0);
}

  function handleEvent(e){
    setStep(Number.parseInt(e.target.value));
  }


  return (
    <div className="App">
      <h2>State 실습</h2>
      step:<select onChange={handleEvent}>
        <option value="1" >1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>
      </select>
      <br></br>
      num:{num}
      <br></br>
      <button onClick={()=>down()}>-</button>
      <button onClick={()=>up()}>+</button>
    </div>
  );
}

export default App;
