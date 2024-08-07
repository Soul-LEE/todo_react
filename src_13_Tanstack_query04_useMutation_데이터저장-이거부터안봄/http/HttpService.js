import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'




//select용도
var fetchEvent = async function(searchParam){

  //Users 클릭시 전달되는 파라미터는 {queryKey:['todos'], meta:}임
  //usersSearch 클릭시 입력시킨 page 값이 전달됨

  console.log("searchParam:",searchParam);

    // console.log("fetchEvent용");
    
    var url = "https://reqres.in/api/users";

    if(searchParam.queryKey){
      url+="?page=2";
    }else{
      url+=`?page=${searchParam}`;
       
    }
          var response = await fetch(url, {method:"get"});
          
          //에러는response값으로 알 수 있음
          if(!response.ok){
            throw new Error("에러다에러")
          }

          var json = await response.json();
          var userList = json.data;
        return userList;
    
    }


    //insert용
    var fetchUserSave = async function(user){
      var url = `https://reqres.in/api/users`;
      var  response = await fetch(url,{
          method:'POST',
          headers:{
              "Content-Type":"application/json",
          },
          body:JSON.stringify(user)
       });
  
  
       if(!response.ok){
          console.log("fetchUserList Error 발생");
          throw new Error("fetchUserList Error 발생")
      }
  
  
      var json = await response.json();
      var userList = json.data;
      console.log("잘저장됐는지확인용도:",userList);
      return userList;
  }

  //이곳에서 한번만 생성하고 다른데서 호출해서 쓴다.
  const queryClient = new QueryClient()


    //update용
    //delete용

    export {fetchEvent,fetchUserSave, queryClient};