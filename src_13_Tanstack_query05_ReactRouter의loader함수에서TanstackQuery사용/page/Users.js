import { useEffect, useState } from 'react';
import UserList from './UserList.js';
import { fetchEvent } from '../http/HttpService.js';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { queryClient } from '../http/HttpService.js';


function Users() {

  //tanstack query
  //useQuery는 조회할 때 사용(select)
  //useMutation >>insert/update/delete 작업 시 사용


  const { data, isLoading, isError, error } = useQuery( //data = fetchEvent가 실행되서 리턴된 값을 넣어주는 곳
    {
      queryKey: ['todos'],
      queryFn: fetchEvent,
      staleTime: 5 * 1000,//default값 0, 1/1000초단위. 5000=5초 안에서는 fetch동작하지 않음 /  
      gcTime: 10000
    })
//밑에 중복이라 없어도 되는데 얘가 먼저 실행되고 cache를 해놓음
//todos라는 캐시값으로 저장해놓고
//밑에loader에서는 cache된 애가 이쓰니까 그대로 사용한다
//놔두는게 성능이 더 좋다고 함



  //화면출력 코드
  let content;
  if (isLoading) {
    content = "로딩중입니다.";
  }

  if (isError) {
    content = "error발생됨";
  }

  if (data) {
    content = <UserList data={data} ></UserList>

  }
  return (
    <>
      <h2>userssss</h2>
      {content}
    </>

  );

}


export async function loader() {
 return queryClient.fetchQuery({
    queryKey: ['todos'],
    queryFn: fetchEvent
  });
}



export default Users;