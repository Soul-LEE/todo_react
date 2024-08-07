import { useContext} from 'react';
import { UserContext } from '../store/user-context';

//1. 필요한 자식에서 useContext 사용
//+createContext로 만든 UserContext도 import

function Board() {

    
    const value = useContext(UserContext);
    //UserContext는 useContext()에 넣으면 에러남. 지금 app만 알고있음. (App에서 작성 시)
    //그래서 여기서도 알기 위해서 외부파일로 만들로 임포트해서 쓰기
    //CreateContext를 외부파일로 만든다 >필요하면 import
    return (
      <div className="Board">
        이름:{value} {/* 부모에서 얻어온 context에서 가져온값 */}
      </div>
    );
  }
  
  export default Board;