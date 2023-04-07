import React from "react";
import { Button } from "components/Button/Button";

export const SubscribeForm = () => {
    return (
        <div className="ml-0 md:ml-0 xl:ml-[235px] justify-center">
            <div className="hidden md:hidden xl:block"
                style={{ width: 339 }}>
                <h3 style={{
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: 1.5,
                    color: 'white',
                }}>Subscribe to our Newsletter</h3>
                <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.29,
                    color: 'white',
                    marginTop: 14,
                }}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
            </div>
            <div className="flex flex-col md:flex-row xl:flex-col mt-[32px] xl:mt-[28px] w-[204px] md:w-[442px] xl:w-[338px] "
                // style={{ marginTop: 28 }}
            >
                <input type="email" name="email" id="" placeholder="Enter your email address"
                    placeholderTextColor='#ffffff'
                    style={{
                        backgroundColor: 'inherit', borderRadius: 6,
                        // width: '100%',
                        color: '#ffffff',
                        //   fontSize: 18,
                    }}
                    className="mb-[16px] md:mb-0 xl:mb-[16px] py-[11.5px] md:py-[14.5px] xl:py-[17.5px] px-[42px] text-[10px]/[15px] md:text-[14px]/[21px] md:mr-[14px] xl:mr-0 w-full"
                />
                <Button cssClass="subscribe-btn" text="Subcribe"></Button>
            </div>
        </div>
    )
}