// import { useAuth } from "components/hooks";
// import { NavLink } from 'react-router-dom';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { FollowUs } from 'components/FollowUs/FollowUs';

export const Navigation = () => {
    // const {isLoggedIn} = useAuth();

    return (
        <nav className='flex justify-center lg:justify-between '>
            <div className='md:w-full justify-center justify-items-center justify-self-center md:pl-[62px] lg:pl-0 content-start'>
                <div className='flex flex-col lg:flex-row lg:items-start lg:min-w-[500px] xl:max-w-[687px]'
                    style={{
                        // display: 'flex',
                        // width: '100%',
                    // alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }}>
                    <div className='flex flex-col justify-center items-center'>
                        <div className="block md:hidden lg:block">
                            <Nav /> 
                        </div>
                        
                        <div className="hidden lg:block lg:mt-24">
                            <FollowUs />
                        </div>
                    </div>
                    <div className='block md:hidden lg:block'>
                        <SubscribeForm/>
                    </div>
                </div>
                <div className='hidden md:block md:justify-self-center lg:hidden'>
                    <SubscribeForm/>
                </div>
                <div className="block lg:hidden mt-[44px] lg:mt-24">
                    <FollowUs />
                </div>
            </div>
        </nav>
    )
}