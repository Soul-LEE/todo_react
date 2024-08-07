import logo from './logo.svg';


//src_11_http01_fetch기본5_삭제하기


import './App.css';

import {useEffect, useState} from 'react';

import UserList  from './components/UserList.js';
import { fetchUserList } from './http/HttpService.js';
import ResponseError from './components/ResponseError.js';

function App() {


  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModelIsOpen] = useState(false);
  //1.삭제할 아이디 저장하는 state
  const [user, setUser] = useState(null);
  
  useEffect(()=>{
      var req = async function(){
        try{
         var userList = await fetchUserList(2);
         setUserList(userList);
        }catch(err){
          console.log("App.fetchUserList", err);
          setError({message:"fetchUserList 에러발생"});
        }
      };
      req();
  },[]);

  //삭제-모달창이용해서 확인
  function handleRemove(del_id){
     console.log("App.handleRemove", del_id);
     setModelIsOpen(modalIsOpen=>!modalIsOpen); //new방식 //이전과는 달리 버튼 눌러도 안닫힘 > onClick만들어주기
     //2.아이디 저장하기. 
     setUser(del_id); 
    }


function handleRemoveConfirm(){
  console.log("App.handleRemoveConfirm") //삭제할 아이디를 저장하는 state만들기
  // var new_RemoveUser = setRemoveUser(...removeUser, ...UserList); 내가하던것
  var new_userList = userList.filter((row,idx)=>row.id !==user);

  setUserList(new_userList);

}

  return (
    <div className="App">
       {/* 모달창 */}
       <dialog open={modalIsOpen}>
         <h2>진짜로 삭제할까요?</h2>
         <button onClick={()=>setModelIsOpen(false)}>cancel</button>
         <button onClick={handleRemoveConfirm}>ok</button>

      </dialog>



       <h2>UserList 목록보기</h2>
        { error && <ResponseError message={error} /> }
        { !error && <UserList data={userList}  onRemove={handleRemove} /> }  
    </div>
  );
}

export default App;
