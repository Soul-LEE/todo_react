import { useEffect, useState } from 'react';
import UserList from './UserList.js';
import { fetchEvent } from '../http/HttpService.js'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { useRef } from 'react';
function UsersSearch() {

  const [searchPage, setSearchPage] = useState('');
  const searchElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    setSearchPage(searchElement.current.value)
  }

  ////////////////////////////
  const { data, isLoading, isError, error } = useQuery( //data = fetchEvent가 실행되서 리턴된 값을 넣어주는 곳
    {
      queryKey: ['todos', {page:searchPage}],
      queryFn: () => fetchEvent(searchPage),
      staleTime: 5 * 1000,//default값 0, 1/1000초단위. 5000=5초 안에서는 fetch동작하지 않음 /  
      // gcTime: 10000
      enabled:searchPage!=='',//값 입력 했을때만 활성화 
      //빈문자열이면 true=>fetch 빈문자열이 아니면 false =>fetch안됨
    })


  //화면출력 코드
  let content;
  if (isLoading) {
    content = "로딩중입니다.";
  }

  if (error) {
    content = "error발생됨";
  }

  if (data) {
    content = <UserList data={data} ></UserList>

  }



  ////////////////////////////

  return (
    <>
      <h2>UsersSearch</h2>
      <form onSubmit={handleSubmit}>
        page:<input type="text" ref={searchElement} />
        <button>검색</button>
      </form>

      <p>
        {content}
      </p>
    </>

  );

}

export default UsersSearch;