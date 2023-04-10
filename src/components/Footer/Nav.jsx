import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        // <div className="flex w-full md:w-[100px]">
            <ul className="flex w-full md:w-[100px] flex-col justify-center self-center">
                <li className="justify-self-center">
                    <NavLink to="/search"
                        className='font-medium text-white text-[14px]/[18px]'
                    >
                        Ingredients
                    </NavLink>
                </li>
                <li className="mt-3.5 md:mt-5 lg:mt-6">
                    <NavLink to='/add'
                        className='font-medium text-white text-[14px]/[18px]'
                    >
                        Add recipes
                    </NavLink>
                </li>
                <li className="mt-3.5 md:mt-5 lg:mt-6">
                    <NavLink to="/my"
                        className='font-medium text-white text-[14px]/[18px]'
                    >
                        My recipes
                    </NavLink>
                </li>
                <li className="mt-3.5 md:mt-5 lg:mt-6">
                    <NavLink to='favorite'
                        className='font-medium text-white text-[14px]/[18px]'
                    >
                        Favorite
                    </NavLink>
                </li>
                <li className="mt-3.5 md:mt-5 lg:mt-6">
                    <NavLink to='shopping-list'
                        className='font-medium text-white text-[14px]/[18px]'
                    >
                        Shopping list
                    </NavLink>
                </li>
            </ul>
        // </div> 
    )
}