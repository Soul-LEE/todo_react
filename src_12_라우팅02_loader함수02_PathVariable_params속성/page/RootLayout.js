import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
    <div>
        <Link to="/">Home</Link><br></br>
        <Link to="/products">Products</Link><br></br>
        <Link to="/users">Users</Link><br></br>
        <Link to="/users/2">Users/2</Link><br></br>
        
    </div>
    <hr></hr>
      {/* all the other elements */}
         <div id="detail">
        <Outlet />
      </div>
 
    </>
  );
}