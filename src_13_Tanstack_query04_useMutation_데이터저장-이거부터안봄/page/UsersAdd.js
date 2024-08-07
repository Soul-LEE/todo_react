import { useEffect, useState } from 'react';
import UserList from './UserList.js';
import { fetchEvent, fetchUserSave,queryClient } from '../http/HttpService.js'
import{useNavigate} from 'react-router-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';



function UsersAdd() {

  const navigate = useNavigate();

  /////////////////////////////////////
//즉시호출안됨. 반드시 mutate 메서드를 호출해야된다

  // const mutation = useMutation({ 대신
const {mutate, data, isPending, isError, error} = useMutation({ //뭔 이즈쿼리랑 비슷하다?

  mutationFn:fetchUserSave,
  onSuccess:()=>{
    // 저장, 수정시 변경사항 반영
    queryClient.invalidateQueries(
      {
        queryKey: ['todos']
      });

    //성공시 리다이렉트
    navigate("/products");
  } });


  const [inputs, setInputs] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("inputs:", inputs);
    
    //명시적호출
    mutate(inputs);
  }

  function handleChange(e) {

    var new_inputs = { ...inputs, [e.target.name]: e.target.value } //js07객체1 데이터관련5json4참고//앞 뒤가 병합됨.
    setInputs(new_inputs);
  }

//화면출력 코드
let content;
if(isPending){
  content="로딩중입니다.";
}

if(isError){
  content = "error발생됨";
}




/////////////////////////////////////
return (
  <>
      <h2>UsersAdd</h2>
      <form onSubmit={handleSubmit}>
        id:<input type="text" name="id" onChange={handleChange} value={inputs.id} /><br/>
        email:<input type="text" name="email" onChange={handleChange} value={inputs.email} /><br/>
        first_name:<input type="text" name="first_name" onChange={handleChange} value={inputs.first_name} /><br/>
        last_name:<input type="text" name="last_name" onChange={handleChange} value={inputs.last_name} /><br/>

        <button>저장</button>
        {/* form태그 안 button은 자동으로 onsubmit 됨 */}
      </form>
    </>

  );

}

export default UsersAdd;