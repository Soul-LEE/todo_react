import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    const error = useRouteError();
    console.log(error);



    return (
        <>
            <MainNavigation/>   
            <hr></hr>
                {/* <Link to="/">Home</Link><br></br>
                <Link to="/products">Products</Link><br></br> 
                rootLayout이랑 중복된코드라서 새로 컴포넌트만들었음*/}
            <h2>에러페이지</h2>
            status:{error.status}<br/>
            statusText:{error.statusText}<br/>
            message:{error.data}<br/>
        </>
    );
}

export default ErrorPage;