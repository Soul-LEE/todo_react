import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
    <div>
        <Link to="/">Home</Link><br></br>
        <Link to="/products">Products</Link><br></br>
    </div>
    <hr></hr>
      {/* all the other elements */}
         <div id="detail">
        <Outlet />
      </div>
 
    </>
  );
}