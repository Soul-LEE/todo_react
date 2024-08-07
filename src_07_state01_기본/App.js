import logo from './logo.svg';
import './App.css';

//1.import
import {useState} from 'react';


function App() {
//2. 콘솔찍어보기 
  console.log(useState(0));
  //대괄호 사용해야함을 알 수 있음


//3.최상위인 App에서 useState가져온다
const [num, setNum] = useState(0);


// +에 대한 이벤트 함수
function up(){
  
  //4.num값 세팅
  setNum(num+1); //반드시 set메서드로 변경해야함
}

// -에 대한 이벤트 함수
function down(){

  //4.num값 세팅
  // setNum(num-1);
//3항연산자사용
setNum(num>0? num-1:0);
}

//5. 재랜더링 확인
console.log("App");
//두번씩 찍히는 이유 : 검정색은 우리가, 연한거는 내부적으로 보여줌 (strict 모드 / index.js)

  return (
    <div className="App">
    <h2>num값 변경</h2>
    값:{num}<br></br>
    <button onClick = {down}>-</button>
    <button onClick = {up}>+</button>

    </div>
  );
}

export default App;
