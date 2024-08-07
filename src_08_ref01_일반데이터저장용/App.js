import logo from './logo.svg';
import './App.css';

import {useRef, useState} from 'react';

function App() {

  let xxx= useRef(0); //드물게 일반 데이터 저장 용도, {current:0}, 값이 변경 되어도 화면 재랜더링이 안됨. ui변경과 무관

function up(){
  console.log(xxx); //ref.current
  xxx.current = xxx.current+1;
  console.log(xxx.current);
}
  return (
    <div className="App">
      <h2>ref사용</h2>
      ref값:{xxx.current}
      <button onClick={up}>+</button>
    </div>
  );
}

export default App;
