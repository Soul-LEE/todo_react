


//자식컴포넌트

function Child(props) {
    console.log(props)
    var fun = props.onParent;



    //이벤트함수

    function handleChildEvent(){

        //복잡한 코드 작업 후
        fun("홍길동");
    }
    return (
        <div className="Child">
            <h2>Child  컴포넌트</h2>
            <button onClick={fun}>부모함수호출</button><br></br>
            <button onClick={()=>fun("홍길동")}>부모함수호출2</button><br></br> {/*부모한테도 홍길동 넘겨줄 수 있음*/}
            <button onClick={()=>handleChildEvent()}>부모함수호출3</button><br></br>
        </div>
        );

}


export default Child;