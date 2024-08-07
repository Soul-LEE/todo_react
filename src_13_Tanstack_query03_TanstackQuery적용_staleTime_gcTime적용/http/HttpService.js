//src_11_http01_fetch기본3_httpService_외부파일로작성에서 가져옴

//select용도
var fetchEvent = async function(){

    console.log("fetchEvent용");
    
    var url = "https://reqres.in/api/users?page=2";
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