import logo from './logo.svg';
import './App.css';

import {useRef} from 'react';
import Child from './component/Child';

function App() {

const xxx= useRef(null);


function handleEvent(e){
  console.log("child input값 출력:", xxx.current.value) //xxx.current까지는 input태그. input태그의 입력값은 .value
}
  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
      <Child ref={xxx} mesg="hello" /><br></br>
      <button onClick={handleEvent}>Child의 input값 얻기</button>
    </div>
  );
}

export default App;
