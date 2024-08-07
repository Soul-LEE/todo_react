// src_07_state03_조건부렌더링_3가지방식

import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [isEditing, setIsEditing] = useState(false);


  //이벤트함수
  function handleEvent() {
    // old방식
    // setIsEditing(!isEditing);

    //new방식(arrow방식) / 논리값은 arrow사용하기
    setIsEditing(isEditing => !isEditing);

  }

  //조건부 랜더링 방식1
  let tag = <>
    <span>홍길동</span>
  </>

  if(!isEditing){
    tag =<>
    <input />
    </>
  }
  return (
    <div className="App">
      <h2>1. if문 이용한 조건부 랜더링</h2>
      {/* 위에서 정의해준다 */}
      {tag}<br></br>
      <button onClick={handleEvent}>{!isEditing?'SAVE':'Edit'}</button>

      <h2>2. 3항연산자 이용한 조건부 랜더링</h2>
      {/* 바로 정의 */}
      {isEditing?<span>홍길동</span>:<input/>}<br></br>
      <button onClick={handleEvent}>{!isEditing?'SAVE':'Edit'}</button>

      <h2>3. && 이용한 조건부 랜더링</h2>
      {isEditing && <span>홍길동</span>}<br></br>
      {!isEditing && <input/>}<br></br>
      <button onClick={handleEvent}>{!isEditing?'SAVE':'Edit'}</button>
    </div>
  );
}

export default App; 
