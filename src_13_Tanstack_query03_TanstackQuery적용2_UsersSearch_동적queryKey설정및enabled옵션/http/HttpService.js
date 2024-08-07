//src_11_http01_fetch기본3_httpService_외부파일로작성에서 가져옴

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
    //update용
    //delete용

    export {fetchEvent};