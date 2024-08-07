import { useLoaderData } from "react-router-dom";


function UserSinglePage({ userList }) {


    const xxx =useLoaderData();
    console.log(xxx);


    
    return (
        <>
            <h2>UserSinglePage</h2>
            
        </>
    );
}

export default UserSinglePage;