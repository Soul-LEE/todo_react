import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  //1.userid에 해당하는 값 입력
  const [inputs, setInputs] = useState({userid:'', passwd:''});

  function handleEvent(e) {
  
    var new_inputs ={...inputs, [e.target.name]:e.target.value} //js07객체1 데이터관련5json4참고//앞 뒤가 병합됨.
    setInputs(new_inputs);
  } 
  
function handleSubmit(e){
  e.preventDefault();
console.log(inputs);

}

  return (
    <div className="App">
      <h1>사용자 입력 태그 + state 사용</h1>
      {/* 입력된 값을 state에 사용하기 */}
      <form onSubmit={handleSubmit}>
        아이디:<input type="text" name="userid" value={inputs.userid} onChange={handleEvent} /> 
        비밀번호:<input type="text" name="passwd" value={inputs.passwd}onChange={handleEvent} /> 
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default App;
