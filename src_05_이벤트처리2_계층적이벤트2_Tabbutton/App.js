import logo from './logo.svg';
import './App.css';
import Tabbutton from './component/Tabbutton';

function App() {

  function handleEvent(mesg) {
    console.log("클릭한값", mesg)
  }

  return (
    <div className="App">
    <h2>App</h2>
    <Tabbutton onTab={handleEvent}>Java</Tabbutton>
    <Tabbutton onTab={handleEvent}>SQL</Tabbutton>
    <Tabbutton onTab={handleEvent}>React</Tabbutton>
    <Tabbutton onTab={handleEvent}>Spring</Tabbutton>
    </div>
  );
} 

export default App;
