import logo from './logo.svg';
import './App.css';
import 카리나 from './assets/카리나.jpg'




//자식 컴포넌트
const Avatar2 = (props)=>{
  console.log(props);
//console보고 작성
  var username = props.username;
  var age = props.age;
  var children = props.children;
  
  return(
    <div className="Avater2">
    이름:{username}<br></br>
    나이:{age}<br></br>
    {children}<br></br>
    </div>
  
  );//return
};//const
  


//자식 컴포넌트 (객체분해할당이용)
const Avatar3 = (props)=>{
  const {username, age, children} = props;

  return(
    <div className="Avater3">
    이름:{username}<br></br>
    나이:{age}<br></br>
    {children}<br></br>
    </div>
  
  );//return
};//const
  
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
  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
        <Avatar {...person}>
          <h2>사진</h2>
          <img src={카리나} width="200"/>
        </Avatar>
    </div>
  );
}

export default App;
