

export async function fetchUserList(n){

    var url = `https://reqres.in/api/users?page=${n}`;

    var  response = await fetch(url,{
       method:'GET'
    });

    if(!response.ok){
        console.log("fetchUserList Error 발생");
        throw new Error("fetchUserList Error 발생")
    }


    var json = await response.json();
    var userList = json.data;
    return userList;
}

export async function fetchUserUpdate(){


}

//POST및 PUT요청은 반드시 다음과 같은 코드를 사용해야 한다.
export async function fetchUserSave(user){
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
    return userList;
}