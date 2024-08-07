import logo from './logo.svg';
import './App.css';



// 9. JSX주석
function App() {

  return 
  <h2>App컴포넌트입니다.1</h2>
  
}


// 9. JSX주석
function App9() {

  return (
    <div>
      <h2>JSX주석</h2>
      {/* JSX주석 */}
      <h2>App컴포넌트입니다.1</h2>
      {/*
      <h2>App 컴포넌트입니다.2</h2>
      */}
    </div>
);
}



//8. 이벤트 구현식 이벤트핸들러는 카멜표기법을 사용해야된다.

function App8() {
  function go(){
    console.log("go");
  }
  return (
    <div>
      <h2>이벤트구현</h2>
      <button onClick={go}>ok</button>
    </div>
);
}





//7. spread연산자
function App7() {
  let target ={href:"http://google.com", target:"_blank"};
  return (
    <div>
      <h2>spread연산자</h2>
      <a{...target}>구글</a>
    </div>
);
}


function Menu(){
  return(   
  <div className="Menu">
    <h2>menu 화면입니다.</h2>
    </div>

)
};


//6. &&이용한 조건부 랜더링
function App6() {
  let flag =false;
  return (
    <div>
      <h2>조건부랜더링</h2>
      {flag && <Menu /> }
      {!flag && <div>hello</div> }
    </div>
);
}


//5.class 속성과 style속성
//- 논리값(true/false)와 null은 {변수값} 사용시 출력이 안 됨
// - CSS 적용하는 방법
// - html의 class 속성
//  : class 속성명 대신에 className을 사용해야된다
//    < div className="xxx">
//  - html의 style 속성
// : style 사용할 때는 반드시 중첩 중괄호를 사용해야된다
// < div style={{color:red}}>
 
//  - 주의할 점
//  이전 css 문법에서 사용했던 케밥표기법 (font-size, background-color) 대신에 카멜표기법 (fontSize, backgroundColor)을 사용해야됨
function App5() {
  return (
    <div style={{color:'red', fontSize:'30px', backgroundColor:'yellow'}}>
    hello
    </div>
);
}





//4. 논리값(true/false)와 null은 {변수값}사용 시 출력이 안됨
function App4() {
  let name="홍길동";
  let address =null;
  let isMarried =true;

  return (
    <div className="App">
      이름:{name}<br></br>
      주소:{address}<br></br>
      결혼여부:{isMarried}<br></br>
      
    </div>
 
);
}



//3. {변수값}은 산술, 비교, 논리, 3항연산자 모두 사용 가능
//null, 논리값은 출력안됨
function App3() {
  let name="홍길동";
  const age =20;

  return (
    <div className="App">
      이름:{name}<br></br>
      나이:{age}<br></br>
      내년나이:{age+1}<br></br>
      30살보다작냐?:{age<30}<br></br>
      30살보다작고 10살보다 많냐?:{age<30 &&age>10}<br></br>
      30살보다크면 크다 출력, 적으면 적다 출력:{age>30?'크다':'작다'}<br></br>
    </div>
 
);
}




//2.JSX 에서 js 변수값등을 출력할때는 {변수값}사용한다.
function App2() {
  let name="홍길동";
  const age =20;

  return (
    <div className="App">
      이름:{name}<br></br>
      나이:{age}<br></br>
    </div>
 
);
}



//1.반드시 단 하나의 ROOT태그 필요
function App1() {
  return (
    <>
    <div className="App">
    hello
    </div>
 
 <div>
 world
 </div>
 </>
);
}



function App_() {
  return (
    <div className="App">
    hello
    </div>
);
}



export default App;
