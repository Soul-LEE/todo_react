import './App.css';
import PersonList from './component/PersonList.js';

let persons = [
  { name: "홍길동", age: 20 },
  { name: "이순신", age: 30 },
  { name: "유관순", age: 40 },
  { name: "강감찬", age: 50 }
];

function App() {
  return (
    <div className="App">
    <h2>학생 정보</h2>
      <PersonList persons={persons}></PersonList>
    </div>
  );
}

export default App;
