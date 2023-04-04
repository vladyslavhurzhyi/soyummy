import React from "react";
import { Button } from "components/Button/Button";

export const SubscribeForm = () => {
    return (
        <div style={{marginLeft: 235}}>
            <div style={{width: 339}}>
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
            <div style={{marginTop: 28}}>
                <input type="email" name="email" id="" placeholder="Enter your email address"
                    placeholderTextColor='#ffffff'
                    style={{
                        backgroundColor: 'inherit', borderRadius: 6, width: '100%', color: '#ffffff',
                        marginBottom: 16, paddingTop: 17.5, paddingBottom: 17.5, fontSize: 18,
                    }} />
                <Button cssClass="subscribe-btn" text="Subcribe"></Button>
            </div>
        </div>
    )
}