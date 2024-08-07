import logo from './logo.svg';
import './App.css';

import { useEffect, useRef } from 'react';

function App() {
  const xxx = useRef(null);
  
  useEffect(() => { xxx.current.focus(); }, []);

  return (
    <div className="App">
      아이디:<input ref={xxx} type="text" /><br />
      비밀번호:<input type="text" /><br />
    </div>
  );
}

export default App;
