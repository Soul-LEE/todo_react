import { Link } from "react-router-dom";


function MainNavigation() {
    return (
        <div>
            <Link to="/">Home</Link><br></br>
            <Link to="/products">Products</Link><br></br>
            <Link to="/users">Users</Link><br></br>
            <Link to="/usersSearch">UsersSearch</Link><br></br>
            <Link to="/usersAdd">UsersAdd</Link><br></br>
        </div>

    );
}

export default MainNavigation;