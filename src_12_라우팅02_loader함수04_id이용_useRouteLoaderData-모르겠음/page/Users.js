import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import UserList from "./UserList";


function Users() {

    // const xxx = useLoaderData(); //자신의 loader데이터
    const xxx = useRouteLoaderData("root"); //id:root의 데이터
    //컴포넌트가 쌓이면서 어떤 부모의 데이터를 가져올지를 여기서 정할 수 있음
    console.log(xxx);

    return (
        <>
            <h2>Users</h2>
            <UserList userList={xxx}></UserList>
        </>
    );
}

export default Users;