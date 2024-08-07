import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

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
      <table border="1">\
        <thead>
          <tr>
            <th>id </th>
            <th>email </th>
            <th>first_name </th>
            <th>avatar </th>
          </tr>
        </thead>
        <tbody>
          {
            userList.map((row, idx) =>
              <tr key={idx}>
                <td>{row.id}</td>
                <td>{row.email}</td>
                <td>{row.first_name}</td>
                <td><img src={row.avatar} width={100} height={100}></img></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
