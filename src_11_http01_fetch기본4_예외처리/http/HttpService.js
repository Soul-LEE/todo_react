

//앞에 강의 fetchUserList와는 달리, 얘는 jsx를 반환하여 화면 구성함.

// 이 코드에서 fetch 함수 호출 시 옵션 객체에서 response.json()을 호출하지 않는 이유는, 
// fetch 함수는 기본적으로 HTTP 응답을 JSON 형식으로 파싱하여 반환함
// 따라서 별도로 response.json()을 호출할 필요 없음
// 그냥 fetch 함수를 호출하면 응답 객체(response)가 반환되고
// 이 객체를 이용하여 필요한 데이터를 추출할 수 있음

// 앞에강의 export async function fetchUserList(n) { 코드에서는 
// response.json()을 호출하여 명시적으로 JSON 데이터를 파싱하고, 
// 그 중에서 json.data를 추출하여 사용자 리스트를 반환하는 방식을 사용함
// 이는 코드를 보다 명확하게 만들기 위한 것이며, 실제로 fetch 함수는 이러한 방식으로도 사용된다.

export async function fetchUserList(n) {
    var url = `https://reqres.in/api/users?page=${n}`; //백틱사용
    var response = await fetch(url,{

        method:'get'
    });

    if(!response.ok){
        console.log("fetchUserList Error 발생");
        throw new error("fetchUserList Error 발생");
    }


    
    var json = await response.json();
    var userList = json.data;
    return userList;
}

export async function fetchUserUpdate(){

}
export async function fetchUserSave(){
    
}