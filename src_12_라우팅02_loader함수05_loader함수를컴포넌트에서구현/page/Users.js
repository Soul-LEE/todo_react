import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import UserList from "./UserList";


function Users() {

    const xxx = useRouteLoaderData("root"); //id:root의 데이터
    console.log(xxx);

    return (
        <>
            <h2>Users</h2>
            <UserList userList={xxx}></UserList>
        </>
    );
}
///////////////////////////////
//app.js /users 로더에 ////요기안에 잇던거 가져와서 export로 바꿈
export async function loader() {
    var url = "https://reqres.in/api/users?page=2";
    var response = await fetch(url);
    var json = await response.json();
    var userList = json.data;
    return userList
}
///////////////////////////////
export default Users;