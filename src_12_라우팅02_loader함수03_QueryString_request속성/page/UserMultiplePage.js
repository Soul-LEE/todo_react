import { useLoaderData } from "react-router-dom";


function UserMultiplePage() {

    const xxx = useLoaderData();
    console.log("xxx가 뭐냐면", xxx);



    return (
        <>
            <h2>UserMultiplePage</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>이름</th>
                        <th>성</th>
                    </tr>
                </thead>
                <tbody>
                    {xxx.map((row, idx) => 
                        <tr key={idx}>
                            <td>{row.id}</td>
                            <td>{row.email}</td>
                            <td>{row.first_name}</td>
                            <td>{row.last_name}</td>
                        </tr>
                    )}

                </tbody>
            </table>


        </>
    );
}

export default UserMultiplePage;