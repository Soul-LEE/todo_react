import { useEffect, useState } from 'react';
import  UserList  from './UserList.js';


function Users() {


    const [userList, setUserList] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);


    
    useEffect(() => {
    // setIsLoading(isLoading=>!isLoading);
        setIsLoading(true);

        var url = "https://reqres.in/api/users?page=2";
        var req = async function () {
          var response = await fetch(url, {method:"put"});//일부러 에러발생시키기


          //에러는response값으로 알 수 있음
          if(!response.ok){
            throw new Error("에러다에러")
          }

          var json = await response.json();
          var userList = json.data;
        return userList;
        };
        //promise를 리턴해줌. 성공했을때는 then(), 에러났을때는 catch~finally
        req()
            .then((userList)=>setUserList(userList)) //이전에랑 다름src_11_http01_fetch기본2_자식출력_props 
            .catch((error)=>setError(error)) //에러 발생시 처리
            .finally(()=>setIsLoading(false));//성공이든 실패든 반드시 수행. 이펙트 안에 true를 false로 바꿔줌
      }, []);


      //화면출력 코드
      let content;
      if(isLoading){
        content="로딩중입니다.";
      }

      if(error){
        content = "error발생됨";
      }

      if(userList){
        content = <UserList data={userList} ></UserList>

      }
    return (
        <>
            <h2>userssss</h2>
            {content}
        </>

    );

}

export default Users;