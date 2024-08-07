
//부모>자식에게 넘길수 있는 방법? props,context
function UserList({data}) {

    // console.log("이것은", data);

    return (
        <table border="1">
        <thead>
          <th>id </th>
          <th>email </th>
          <th>first_name </th>
          <th>avatar </th>
        </thead>
            <tbody border="1">
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

</table>
    );
}


export default UserList;