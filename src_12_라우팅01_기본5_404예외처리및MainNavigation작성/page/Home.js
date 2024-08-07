import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h2>home</h2>

            <p>
                <a href="/products">products로 가기(a태그이용)</a> <br></br>
            </p>
            <p>
                <Link to="/products">products로 가기(link이용)</Link>
            </p>
        </>
    );
}

export default Home;