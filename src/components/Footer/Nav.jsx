import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/search"
                        className='font-medium text-white'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        Ingredients
                    </NavLink>
                </li>
                <li className="mt-6">
                    <NavLink to='/add'
                        className='font-medium text-white'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        Add recipes
                    </NavLink>
                </li>
                <li className="mt-6">
                    <NavLink to="/my"
                        className='font-medium text-white'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        My recipes
                    </NavLink>
                </li>
                <li className="mt-6">
                    <NavLink to='favorite'
                        className='font-medium text-white'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        Favorite
                    </NavLink>
                </li>
                <li className="mt-6">
                    <NavLink to='shopping-list'
                        className='font-medium text-white'
                    // style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: 'white' }}
                    >
                        Shopping list
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}