import logo from './logo.svg';
import './App.css';

import {useEffect,useState} from 'react';

function App() {
  const [num, setNum] =useState(0);


  useEffect(
  //부수 기능
    ()=>{
      console.log("useEffect1")
      //clean-up
      return ()=>{console.log("clean-up")};
      //맨처음에는 실행이 안되고 그 이후부터 실행됨
    }
  ); 


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
