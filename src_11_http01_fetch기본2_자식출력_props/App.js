import logo from './logo.svg';

import './App.css';
import { useEffect, useState } from 'react';
import UserList from './components/UserList';
function App() {

  const [userList, setUserList] = useState([]);

  var url = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    var req = async function () {

      var response = await fetch(url);
      var json = await response.json();
      var userList = json.data;
      setUserList(userList);
    };
    req();
  }, []);

  return (
    <div className="App">
      <table border="1">
        <thead>
          <th>id </th>
          <th>email </th>
          <th>first_name </th>
          <th>avatar </th>
        </thead>
    <UserList data={userList} ></UserList>
      </table> 
    </div>
  );
}

export default App;
