import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [num, setNum] = useState({ n: 0 }) //JSON //100번지
  
  function handleEvent(){
    // num.n +=1;
    // setNum(num);
    //위 두줄은 불변객체가 아니기 때문에 리액트가 n의 변경사항을 인식하지 못함. 따라서 화면 갱신이 안됨
  

    //Json처리는 반드시 다음과 같이 복사본을 만들고 값을 변경하는 방식으로  state를 변경해야한다. 
    const new_num = {...num, n:num.n+1}; //{n:0, n:1} >>키가 같아서 병합이 되고  n:1이 됨
    console.log(new_num,num);
    console.log(new_num===num); //다르게 인식함

    setNum(new_num);
  }
  
  
  return (
    <div className="App">
      <h2>1. JSON이용한 state처리</h2>
      값:{num.n}<br></br>
      <button onClick={handleEvent}>+</button>
    </div>
  );
}

export default App;
