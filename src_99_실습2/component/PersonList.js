// #PersonList.js
import './PersonList.css';


function PersonList({persons}) {
    console.log("이게맞는지?",persons[1].name);
    console.log("그럼이건?",persons[2].age);

//     var result = props.map(function (idx, data) {
//         console.log(data, idx);
//         return data;
//       });
//    console.log("결과:",result);

    return(
        <div className="PersonList">
    <table border="1px">
        <thead>
            <tr className="head">
                <th>번호</th>
                <th>이름</th>
                <th>나이</th>
            </tr>
        </thead>
        <tbody>
            {persons.map((data, idx) => {
                return <tr key = {idx}>
                    <td>{idx+1}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                </tr>
            })}
            
        </tbody>
    </table>
    </div>
    );
}

// return(
//     <table border="1px">
//         <thead>
//             <tr>
//                 <th>번호</th>
//                 <th>이름</th>
//                 <th>나이</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>1</td>
//                 <td>{props[0].name}</td>
//                 <td>{props[0].age}</td>
//             </tr>
//             <tr>
//                 <td>2</td>
//                 <td>{props[1].name}</td>
//                 <td>{props[1].age}</td>
//             </tr>
//             <tr>
//                 <td>3</td>
//                 <td>{props[2].name}</td>
//                 <td>{props[2].age}</td>
//             </tr>
//             <tr>
//                 <td>4</td>
//                 <td>{props[3].name}</td>
//                 <td>{props[3].age}</td>
//             </tr>
//         </tbody>
//     </table>
//     );

export default PersonList;
