import { Link } from "react-router-dom";


function MainNavigation() {
    return (
        <div>
            <Link to="/">Home</Link><br></br>
            <Link to="/products">Products</Link><br></br>
        </div>

    );
}

export default MainNavigation;