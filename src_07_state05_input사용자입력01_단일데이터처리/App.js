import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  //1.userid에 해당하는 값 입력
  const [userid, setUserid] = useState('');

  function handleEvent(e) {
    setUserid(e.target.value);
  }

function handleSubmit(e){
  e.preventDefault();

  console.log("입력값:", userid);
}

  return (
    <div className="App">
      <h1>사용자 입력 태그 + state 사용</h1>
      {/* 입력된 값을 state에 사용하기 */}
      입력값:{userid}<br></br>
      <form onSubmit={handleSubmit}>
        아이디:<input type="text" name="userid" value={userid} onChange={handleEvent} />
        {/* 자동으로 value에 저장되지만 onchange가 없으면 잇풋창이 입력이 안됨. onchange로 동기화해야한다 */}
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default App;
