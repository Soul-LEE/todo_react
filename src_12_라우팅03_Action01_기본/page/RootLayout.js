import { Link, Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
    <MainNavigation/>

    <hr></hr>
      {/* all the other elements */}
         <div id="detail">
        <Outlet />
      </div>
 
    </>
  );
}