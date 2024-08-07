
//부모>자식에게 넘길수 있는 방법? props,context
function UserList({data}) {

    console.log("이것은", data);

    return (
  
            <tbody>
                { 
                data.map((row, idx)=>
                <tr key={idx}>
                <td>{row.id}</td>
                <td>{row.email}</td>
                <td>{row.first_name}</td>
                <td><img src={row.avatar} width={100} height={100}/> </td>
                </tr>
            )
}
            </tbody>

    );
}


export default UserList;