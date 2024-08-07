import logo from './logo.svg';
import './App.css';


//함수형 컴포넌트
function App() {

  //이벤트 핸들러 함수
  function handleEvent(e){
    console.log("handleEvent",e, e.target, e.target.innerText);
  }

    //이벤트 핸들러 함수
    function handleEvent1(e){
      console.log("handleEvent1", e);
    }

   //이벤트 핸들러 함수
   function handleEvent2(e,name){
    console.log("handleEvent2",e.target.innerText, name);
  }

  return (
    <div className="App">
    <h2>App 컴포넌트</h2>
    <button onClick={handleEvent} >ok</button>
    <button onClick={()=>handleEvent1()} >ok2</button>
    <button onClick={(e)=>handleEvent1(e)} >ok3</button>

    <button onClick={(e)=>handleEvent2(e, "홍길동")} >ok4</button> {/*임의의 값 홍길동도 넘기기 가능*/}
    
    </div>
  );
}

export default App;
