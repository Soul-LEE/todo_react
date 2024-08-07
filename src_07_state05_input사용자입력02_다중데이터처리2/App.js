import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  //1.userid에 해당하는 값 입력
  const [userid, setUserid] = useState('');
  const [passwd, setPasswd] = useState('');

  function handleEvent(e) {
    console.log(e.target); //input/type같고 name으로 구분할 수 있다.
    if(e.target.name=='userid'){
      setUserid(e.target.value);
    }else{
      setPasswd(e.target.value);
    }
  } 
  
function handleSubmit(e){
  e.preventDefault();
  console.log("입력값:", userid, passwd);
}

  return (
    <div className="App">
      <h1>사용자 입력 태그 + state 사용</h1>
      {/* 입력된 값을 state에 사용하기 */}
      <form onSubmit={handleSubmit}>
        아이디:<input type="text" name="userid"  onChange={handleEvent} /> 
        비밀번호:<input type="text" name="passwd" onChange={handleEvent} /> 
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default App;
