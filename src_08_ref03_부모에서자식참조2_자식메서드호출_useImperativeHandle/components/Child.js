
import {forwardRef, useRef, useImperativeHandle} from 'react';

const Child=forwardRef(  
    (props, ref)=> {
     console.log(props, ref);

      const input_ref = useRef(null);

    // 방법1: 외부에서 작성된 함수 선언식 이용 
    useImperativeHandle(ref, ()=>({open2})); // ({함수명,함수명2})
     //App에서 호출
     function open2(){
       console.log("open 메서드");
     }

     // 방법2: return {} 안에서 작성된 함수 선언식 이용 
     // https://react.dev/reference/react/useImperativeHandle 참조할 것.
     useImperativeHandle(ref, ()=>{
        return {
          open(x){
            console.log("open 메서드 >>>>>>>>>>>>>>", x);
          },
          close(){
            console.log("close 메서드 >>>>>>>>>>>>>>");
          },
          input_value(){
            return input_ref.current.value;
          }
        }
     });


    ////////////////////////////////////
    return (
      <div className="Child">
        <h2>Child컴포넌트
        </h2>
        mesg:{props.mesg}<br></br>
        아이디:<input  ref={input_ref}/>
      </div>
     );
  } );
  
  export default Child;