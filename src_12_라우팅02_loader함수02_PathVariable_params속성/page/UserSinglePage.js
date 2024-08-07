import { useLoaderData } from "react-router-dom";


function UserSinglePage({ userList }) {


    const xxx = useLoaderData();
    console.log("이거",xxx);



    return (
        <>
            <h2>UserSinglePage</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>first_name</th>
                        <th>사진</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{xxx.id}</td>
                            <td>{xxx.email}</td>
                            <td>{xxx.first_name}</td>
                            <td><img src={xxx.avatar} width="100" height="50"/></td>

                        </tr>
                    </tbody>
              

            </table>

        </>
    );
}

export default UserSinglePage;