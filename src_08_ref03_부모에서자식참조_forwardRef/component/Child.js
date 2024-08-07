
import {forwardRef} from 'react';


//일반함수를 arrow형으로 변경
//한 후 forwardRef 넣어주기
//그래도ref는 defined임
//props 외 따로 ref받아줘야함
const Child=forwardRef(
(props, ref)=> {
    console.log(props, ref);
    return (
      <div className="Child">
      <h2>Child컴포넌트</h2>
      mesg:{props.mesg} <br></br>
      아이디:<input ref={ref}/>  {/* 부모가 자식의 input태그 참조할 수 잇께됨 */}

      </div>
    );
  }
);
  export default Child;
  