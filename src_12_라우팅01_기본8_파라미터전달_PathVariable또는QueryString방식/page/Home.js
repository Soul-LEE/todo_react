import { Link, useNavigate } from "react-router-dom";



function Home() {
const navigate = useNavigate();

    function handleEvent(){
        navigate("/products");
    }
    
    return (
        <>
            <h2>home</h2>

            <p>
                <a href="/products">products로 가기(a태그이용)</a> <br></br>
            </p>
            <p>
                <Link to="/products">products로 가기(link이용)</Link>
            </p>
            <p>
                <button onClick={handleEvent}>products로 가기(프로그래밍)</button>
            </p>
        </>
    );
}

export default Home;