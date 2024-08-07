

//화면구현아님. App에 있던 url에 요청한 코드 정도만 가지면 됨. jsx를 가질 필요 없음
// function HttpService(){
//     return(
//         //jsx리턴
//     );

// }

//없애버리고
//저 코드들만 가지고 있는 코드만 가지고있으면 된다.


// export default HttpService;
//대신


// fetch(url)는 기본적으로 GET 요청을 보냄 
// fetch 함수는 첫 번째 인자로 요청할 URL을 받고, 
// 두 번째 인자로 옵션 객체를 받음
// 옵션 객체에서 method를 명시적으로 설정하지 않으면 기본값으로 GET 요청
export async function fetchUserList(n) {
    var url = `https://reqres.in/api/users?page=${n}`; //백틱사용
    var response = await fetch(url);
    var json = await response.json();
    var userList = json.data;
    return userList;
}

export async function fetchUserUpdate(){

}
export async function fetchUserSave(){
    
}