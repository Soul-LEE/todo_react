import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';

function App() {


  const userid = useRef(null);
  const passwd = useRef(null);

function handleSubmit(e){
  e.preventDefault();
  console.log(userid.current.value, passwd.current.value);
}
  return (
    <div className="App">
      <h2>사용자입력태그+ref 사용</h2>
      <form onClick={handleSubmit}>
        아이디:<input type="text" name="userid" ref={userid} /> {/*  value={userid}*/}
        비밀번호:<input type="text" name="passwd" ref={passwd} />{/*  value={passwd}*/}  
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default App;
