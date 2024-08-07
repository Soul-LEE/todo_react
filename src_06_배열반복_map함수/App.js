import logo from './logo.svg';
import './App.css';




function App() {
  /////////////////////////////////////////////
  //1.배열이용하기
  const userList = [{ username: "홍길동1", age: 20, address: "서울1" },
                    { username: "홍길동2", age: 20, address: "서울2" },
                    { username: "홍길동3", age: 20, address: "서울3" }
                    ];

  //js (반복문)
  var result = userList.map(function (data, idx) {
    console.log(data, idx);
    return data;
  });
                    //위 식 축약(애로우)
                    var result = userList.map((data, idx) => data);

  console.log(result);
  /////////////////////////////////////////////

  //2.컴포넌트이용
  function Avatar({ username, age, address }) {
    return (
      <span className="Avatar">
        이름:{username}, 나이:{age}, 주소:{address}
      </span>
    );
  }


  return (
    <div className="App">
      <h2>1.배열의 첨자 이용해서 개별접근</h2>
      회원1:이름:{userList[0].username}, 나이:{userList[0].age}, 주소:{userList[0].address}<br></br>
      회원2:이름:{userList[1].username}, 나이:{userList[1].age}, 주소:{userList[1].address}<br></br>
      회원3:이름:{userList[2].username}, 나이:{userList[2].age}, 주소:{userList[2].address}<br></br>

      <h2>2. Avatar 컴포넌트 이용</h2>
      회원1: <Avatar {...userList[0]} /><br></br>
      회원2: <Avatar {...userList[1]} /><br></br>
      회원3: <Avatar {...userList[2]} /><br></br>

      <h2>3.배열의 첨자 반복</h2>
      {/*
                 //js (반복문)
                 var result = userList.map(function(data, idx){
                  return data;
                  });
                            //위 식 축약(애로우)
                            var result = userList.map((data,idx)=>data);      
                  */}
      {userList.map((data, idx) => {
        return <><div>회원{idx + 1}: 이름:{data.username}, 나이:{data.age}, 주소:{data.address}</div><br></br></>
      })

      }

      <h2>4. 아바타 반복</h2>
      {
        userList.map((data, idx)=>{
          // return <Avatar key={idx} username={data.username} age={data.age} address={data.address}/>
          return <><Avatar key={idx} {...data}/><br></br></>
        })
      }
    </div>
  );
}//app

export default App;
