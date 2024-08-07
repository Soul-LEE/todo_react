import logo from './logo.svg';
import './App.css';

import {useEffect,useState} from 'react';

function App() {
  const [num, setNum] =useState(0);

  useEffect(()=>{console.log("useEffect1")},[num]); //num을 넣으면 num 이변경될때마다 실행됨. (setNum)
  useEffect(()=>{console.log("useEffect2")},[]);
  // 모두랜더링 된 후 Effect실행됨 (console App보다 늦게 실행됨)


  function up(){
    setNum(num+1);
  }

  console.log("App"); //값 바뀌면서 재랜더링 될 때마다 찍힘
  
  return (
    <div className="App">
      값:{num}<br></br>
    <button onClick={up}>+</button>
      </div>
  );
}

export default App;
