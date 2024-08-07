//src_09_context_사용_createContext_useContext
import logo from './logo.svg';
import './App.css';
import BoardList from './components/BoardList';
// import {/*createContext*/useState } from 'react';
//1.이제 외부파일을 만들어서 여긴 필요가 없다. import를해준다

import {useState } from 'react';
import { UserContext } from './store/user-context';


function App() {

  // const UserContext = createContext('');
  //1.이제 외부파일을 만들어서 여긴 필요가 없다. import를해준다
  const [name, setName] = useState('홍길동');

  return (
    <div className="App">
      <UserContext.Provider value={name}>   {/* value에 전달하고싶은값넣기. 배열,json,함수 다 가능 */}
        <BoardList />
      </UserContext.Provider>

    </div>
  );
}

export default App;
