import logo from './logo.svg';
import './App.css';
import Child from './component/Child.js';



// 부모컴포넌트


function App() {
  function handleEvent(name) {
    console.log("App.handleEvent",name);
  }

  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
      <Child onParent={handleEvent} />
      {/* 임의지정변수. on으로 시작함으로서 이벤트임을 알려주기 */}
    </div>
  );
}

export default App;
