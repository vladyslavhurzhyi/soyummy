import { useSelector } from "react-redux";
import { getLoges } from "redux/auth/authSelectors";
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    const isLoggedIn = useSelector(getLoges);

    return (
        <nav>
            {/* <NavLink to='/'>Home</NavLink> */}
            {isLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>}
        </nav>
    )
}