import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
export const ErrorPage=()=>{
    const error=useRouteError();
    console.log(error);
    return(
        <div>
        <h1>Error</h1>
        <NavLink to="/">
            <button>Go Home</button>
        </NavLink>
        </div>
) 
}