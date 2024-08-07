import { useLoaderData } from "react-router-dom";


function UserList({ userList }) {

    // const xxx = useLoaderData();
    // console.log(xxx);

    return (
        <>
            <h2>UserList</h2>
            <div className="App">
                <table border="1">
                    <thead>
                        <tr>
                            <th>id </th>
                            <th>email </th>
                            <th>first_name </th>
                            <th>avatar </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((row, idx) =>
                                <tr key={idx}>
                                    <td>{row.id}</td>
                                    <td>{row.email}</td>
                                    <td>{row.first_name}</td>
                                    <td><img src={row.avatar} width={100} height={100}></img></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserList;