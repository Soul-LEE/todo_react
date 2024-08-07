
import { useRef, forwardRef, useImperativeHandle } from "react";
// function Child() {
//를 arrow로 바꿔주기


const Child = forwardRef(

(props, ref)=>{
    const dialog_X = useRef(null);

useImperativeHandle(ref, ()=>({modal_open}));

    function modal_open() {
        //얘도 dialog에 접근해야함 > ref사용 . dialog 찜하는 용도
        dialog_X.current.showModal();


    }
    return (
        <div className="Child"s>
            <h2>Child 컴포넌트</h2>
            <dialog ref={dialog_X}>
                <form method="dialog">
                    아이디:<input /><br />
                    비번:<input /><br />
                    <button value="cancel">취소</button>
                    <button id="confirmBtn" value="default">확인</button>
                </form>
            </dialog>
        </div>
    );
});

export default Child;
