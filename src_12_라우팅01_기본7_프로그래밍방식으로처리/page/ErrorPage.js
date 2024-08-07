import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    return (
        <>
            <MainNavigation/>
            <hr></hr>
                {/* <Link to="/">Home</Link><br></br>
                <Link to="/products">Products</Link><br></br> 
                rootLayout이랑 중복된코드라서 새로 컴포넌트만들었음*/}

            
            <h2>에러페이지</h2>
        </>
    );
}

export default ErrorPage;