import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { FollowUs } from 'components/FollowUs/FollowUs';

export const Navigation = () => {
    return (
        <nav className='flex justify-center xl:justify-between xl:w-full'>
            <div className='md:w-full justify-center  md:pl-[62px] xl:pl-0 content-start'>
                <div className='flex flex-col xl:flex-row xl:items-start justify-between'>
                    {/*  xl:min-w-[500px] xl:max-w-[700px] xl:min-w-[700px] xl:max-w-[700px] */}
                    <div className='flex flex-col justify-center items-center'>
                        <div className="block md:hidden xl:block">
                            <Nav /> 
                        </div>
                        <div className="hidden xl:block xl:mt-24">
                            <FollowUs />
                        </div>
                    </div>
                </div>
                <div className='block md:justify-self-center xl:hidden mt-[32px] md:mt-0'>
                    <SubscribeForm/>
                </div>
                <div className="block xl:hidden mt-[44px] xl:mt-24">
                    <FollowUs />
                </div>
            </div>
        </nav>
    )
}