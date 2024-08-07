import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UserList from './components/UserList.js'
import { fetchUserList } from './http/HttpService.js';
import ResponseError from './components/ResponseError.js'

function App() {

  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    var req = async function () {


      try {
        var userList = await fetchUserList(2);
        setUserList(userList);
      } catch (err) { //에러가 났다
        
        console.log("App.fetchUserList", err);
        setError({message:"fetchUserList 에러발생"});
      }
    };
    req();
  }, []);


  return (
    <div className="App">
      <h2>UserList 목록보기</h2>
      { error && <ResponseError message={error}/>}   {/* props로 전달함 */}
      { !error && <UserList data ={userList}/>}

    </div>
  );
}

export default App;
