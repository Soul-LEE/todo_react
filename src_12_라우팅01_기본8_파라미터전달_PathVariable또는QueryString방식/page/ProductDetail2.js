import { useSearchParams } from "react-router-dom";

function ProductDetail2() {
    const [xxx,yyy] = useSearchParams();
    // console.log(xxx); //확인필요

    const id = xxx.get("id");
    const pw = xxx.get("pw");
    console.log("id:",id);
    console.log("pw:",pw);

    return (    
        <>
            <h2>ProductDetail2</h2>
            선택한id:{id}<br></br>
            비밀번호는말이야:{pw}이거임
        </>

    );

}

export default ProductDetail2;