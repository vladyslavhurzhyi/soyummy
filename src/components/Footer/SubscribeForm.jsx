import React from "react";
import { useDispatch } from 'react-redux';
import { subscribe } from "redux/subscribe/subscribeOperations";
import { Button } from "components/Button/Button";
import { ReactComponent as SvgMail } from './images/mailIcon.svg';
import { emailRegExp } from "utils/regExp/regExp";

export const SubscribeForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');

    const isEmailValid = email.match(emailRegExp);

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEmailValid) {
            dispatch(subscribe(email));
            setEmail('');
        }
    }
    return (
        <div className="ml-0 justify-center justify-self-center lg:w-[300px] xl:w-[339px]">
            <div className="hidden md:hidden lg:block lg:mb-[28px] ">
                <h3 className="text-whiteText text-[18px]/[27px] font-bold">Subscribe to our Newsletter</h3>
                <p className="text-whiteText text-[14px]/[18px] font-normal mt-[14px]">
                    Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row lg:flex-col ">
                <div className="relative md:mr-[12px] lg:mr-0 mb-[16px] md:mb-0 lg:mb-[16px]">
                    <div className="absolute top-[13px] md:top-[17px] xl:top-[23.5px] left-[14px] md:left-[15px] lg:left-[15.5px]">
                        <SvgMail className="w-[16px] h-[12px] md:w-[20px] md:h-[16px]" />
                    </div>
                    <input type="email" name="email" id="" placeholder="Enter your email address" value={email} 
                        onChange={handleInputChange}
                        className="bg-transparent rounded-md text-whiteText font-normal dark:border-white placeholder:font-normal placeholder:text-whiteText placeholder:text-slate-300 dark:placeholder:text-whiteText md:w-[260px] lg:w-full py-[11.5px] md:py-[14.5px] xl:py-[17px] pl-[42px] lg:pl-[51px] pr-[14px] text-[10px]/[15px] md:text-[14px]/[21px] xl:text-[18px]/[27px] w-full"
                    />
                </div>
                <Button cssClass="subscribe-btn" text="Subcribe" type='submit' className='bg-accentMain dark:bg-accentDark'></Button>
            </form>
        </div>
    )
}