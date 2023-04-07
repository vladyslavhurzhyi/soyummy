// import { useAuth } from "components/hooks";
// import { NavLink } from 'react-router-dom';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { FollowUs } from 'components/FollowUs/FollowUs';

export const Navigation = () => {
    // const {isLoggedIn} = useAuth();

    return (
        <nav>
            <div className='md:w-full justify-center justify-items-center justify-self-center'>
                <div className='flex flex-col xl:flex-row'
                    style={{
                        display: 'flex',
                        width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }}>
                    <div className='flex flex-col justify-center items-center'
                        // style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <div className="block md:hidden xl:block">
                        <Nav /> 
                        </div>
                        
                        <div className="hidden xl:block xl:mt-24">
                            <FollowUs />
                        </div>
                    </div>
                    <div className='block md:hidden xl:block'>
                        <SubscribeForm/>
                    </div>
                </div>
                <div className='hidden md:block xl:hidden'>
                    <SubscribeForm/>
                </div>
                <div className="block xl:hidden mt-[44px] xl:mt-24">
                    <FollowUs />
                </div>
            </div>
        </nav>
    )
}