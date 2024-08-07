import logo from './logo.svg';
import './App.css';




//자식 컴포넌트
function Avatar(props){

  console.log("props:", props);

  var username = props.username;
  var age = props.xxx;

  return(
    <div className="Avater">
      이름:{username}<br></br>
      나이:{age}<br></br>
      주소:{props.address}<br></br>      
      {/* 변수 안받고 바로 적용 가능 */}
    </div>
  );
}



//자식 컴포넌트
function Avatar2(props){

  //개체분해할당 가능
  const {username, xxx, address} =props;
 
  return(
    <div className="Avater2">
      이름:{username}<br></br>
      나이:{xxx}<br></br>
      주소:{address}<br></br>      
    </div>
  );
}



//자식 컴포넌트
function Avatar3({username, xxx, address}){
  //avatar2의 props해당값을 파라미터에 바로 넣어주기
  //개체분해할당 가능
  // const {username, xxx, address} =props;
 
  return(
    <div className="Avater3">
      이름:{username}<br></br>
      나이:{xxx}<br></br>
      주소:{address}<br></br>      
    </div>
  );
}


//자식 컴포넌트
function Avatar4({username, xxx, address="부산"}){
  console.log("address:",address);
  // 넘겨주지 않은 props값은 undefined. 부산 으로 default값 적용 ㄱㄴ
  return(
    <div className="Avater4">
      이름:{username}<br></br>
      나이:{xxx}<br></br>
      주소:{address}<br></br>      
    </div>
  );
}


//자식 컴포넌트
function Avatar5({username, xxx, address}){
  return(
    <div className="Avater5">
      이름:{username}<br></br>
      나이:{xxx}<br></br>
      주소:{address}<br></br>      
    </div>
  );
}



//부모 컴포넌트
function App() {
  var username="홍길동";
  var age=20;
  var address="서울";

  //위보다 이게 더 일반적(json+배열)
  var person = {username:"이순신", xxx:20, address:"부산" }
  return (
    <div className="App">
      <h2>App 컴포넌트</h2>
      <Avatar username={username} xxx={age} address={address}/>
      <Avatar2 username={username} xxx={age} address={address}/>
      <Avatar3 username={username} xxx={age} address={address}/>
      <Avatar4 username={username} xxx={age} />
      <Avatar5 {...person} />
      {/* 스프레드연산자사용 */}
    </div>
  );
}

export default App;
