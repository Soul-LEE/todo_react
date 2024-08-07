import { useParams } from "react-router-dom";


//pathVariable방식, url포함, useParams사용
function ProductDetail() {
    // const xxx = useParams();
    // console.log(xxx); //id값이 넘어온다.

    const { id } = useParams();
    console.log(id);

    return (


        <>
            <h2>ProductDetail</h2>
            선택한 id:{id}
        </>

    );

}

export default ProductDetail;