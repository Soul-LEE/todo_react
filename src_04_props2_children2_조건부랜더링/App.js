import logo from './logo.svg';
import './App.css';
import 카리나 from './assets/카리나.jpg'




  
//자식 컴포넌트 (객체분해할당이용)
const Avatar = ({username, age, children})=>{
  // const {username, age, children} = props;

  return(
    <div className="Avater">
    이름:{username}<br></br>
    나이:{age}<br></br>
    {children}<br></br>
    </div>
  
  );//return
};//const
  
  


//부모 컴포넌트
function App() {
  var person = {username:"이순신", age:20}

  //조건에 해당하는 변수
  var showImage=false;


  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
        <Avatar {...person}>
          {/*
            조건부 랜더링 문법
            {변수&& jsx|값}
          */}
          {showImage &&       
          <>
          <h2>사진</h2>
          <img src={카리나} width="200"/></>}

    
        </Avatar>
    </div>
  );
}

export default App;
