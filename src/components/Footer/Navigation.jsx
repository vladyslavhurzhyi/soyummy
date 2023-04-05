// import { useAuth } from "components/hooks";
// import { NavLink } from 'react-router-dom';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { FollowUs } from 'components/FollowUs/FollowUs';

export const Navigation = () => {
    // const {isLoggedIn} = useAuth();

    return (
        <nav>
            {/* <NavLink to='/'>Home</NavLink> */}
            {/* {isLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>} */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
            }}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Nav />
                    <div className="mt-24">
                        <FollowUs />
                    </div>
                </div>
                <SubscribeForm/>
            </div>
        </nav>
    )
}