  import logo from './logo.svg';
  import './App.css';

  import {useState} from 'react';

  function App() {

    const [isEditing, setIsEditing] = useState(true);


    //이벤트함수
    function handleEvent(){
      // old방식
        // setIsEditing(!isEditing);
        // setIsEditing(!isEditing);

        //new방식(arrow방식) / 논리값은 arrow사용하기
        setIsEditing(isEditing=>!isEditing);
        // setIsEditing(isEditing=>!isEditing);
        //2회 찍었을때 위와 다르게 안바뀜 둘다 적용되기때문
        
        //=>이 함수를 풀어서 쓰면 이런뜻임
        // setIsEditing(function(isEditing) {
        //   return !isEditing;
        // });

    }
    return (
      <div className="App">
        <h2>논리값 state </h2>
        값:{isEditing?"true":"false"}<br></br>
        <button onClick={handleEvent}>edit</button>
      </div>
    );
  }

  export default App; 
