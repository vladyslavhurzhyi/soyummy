import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import { FollowUs } from 'components/FollowUs/FollowUs';

export const Navigation = () => {
  return (
    <nav className="flex justify-center lg:justify-between lg:w-full">
      <div className="md:w-full justify-center md:pl-[62px] lg:pl-0 content-start">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between">
          <div className="flex flex-col justify-center items-center">
            <div className="block md:hidden lg:block">
              <Nav />
            </div>
            <div className="hidden lg:block lg:mt-24">
              <FollowUs className="followus-footer" />
            </div>
          </div>
        </div>
        <div className="block md:justify-self-center lg:hidden mt-[32px] md:mt-0">
          <SubscribeForm />
        </div>
        <div className="block lg:hidden mt-[44px] lg:mt-24">
          <FollowUs className="followus-footer" />
        </div>
      </div>
    </nav>
  );
};
