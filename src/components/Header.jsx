import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="my-10 space-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addCoffee">Add Coffee</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signUp">SignUp</NavLink>
            <NavLink to="/signIn">SignIn</NavLink>
        </div>
    );
};

export default Header;