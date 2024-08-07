import logo from './logo.svg';
import './App.css';
import { Menu } from './component/Menu';
import { Bottom, Bottom2 } from './component/Bottom';


function App(){
  return(   
  <div className="App">
      <Menu />
      <hr></hr>
      app 컴포넌트입니다.
      <hr></hr>
      <Bottom />
      <Bottom2 />
    </div>
  )
};

export default App;
