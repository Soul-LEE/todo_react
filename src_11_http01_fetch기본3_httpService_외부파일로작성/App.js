import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
//2.
import UserList from './components/UserList.js'
import { fetchUserList } from './http/HttpService.js';

function App() {

  const [userList, setUserList] = useState([]);

  //1.httpservice에 잘라붙임
  // var url = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    var req = async function () {


//1.httpservice에 잘라붙임
      // var response = await fetch(url);
      // var json = await response.json();
      // var userList = json.data;
          //3.
          var userList = await fetchUserList(2);

              console.log(userList);
              setUserList(userList);
    };
    req();
  }, []);

  return (
    <div className="App">
        <h2>UserList 목록보기</h2>
        <UserList data={userList}/>
    </div>
  );
}

export default App;
