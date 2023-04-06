import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <div className="w-[100px]">
            <ul className="justify-center place-items-center">
                <li className="justify-self-center">
                    <NavLink to="/search"
                        className='font-medium text-white text-[14px]/[18px] xl:text-[18px]/[18px]'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        Ingredients
                    </NavLink>
                </li>
                <li className="mt-3.5 md:mt-5 xl:mt-6">
                    <NavLink to='/add'
                        className='font-medium text-white text-[14px]/[18px] xl:text-[18px]/[18px]'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        Add recipes
                    </NavLink>
                </li>
                <li className="mt-3.5 md:mt-5 xl:mt-6">
                    <NavLink to="/my"
                        className='font-medium text-white text-[14px]/[18px] xl:text-[18px]/[18px]'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        My recipes
                    </NavLink>
                </li>
                <li className="mt-3.5 md:mt-5 xl:mt-6">
                    <NavLink to='favorite'
                        className='font-medium text-white text-[14px]/[18px] xl:text-[18px]/[18px]'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        Favorite
                    </NavLink>
                </li>
                <li className="mt-3.5 md:mt-5 xl:mt-6">
                    <NavLink to='shopping-list'
                        className='font-medium text-white text-[14px]/[18px] xl:text-[18px]/[18px]'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        Shopping list
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}