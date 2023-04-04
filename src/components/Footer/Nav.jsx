import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <div>
            <ul>
                <li><NavLink style={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'white'
                }}>Ingredients</NavLink></li>
                <li style={{marginTop: 24}}><NavLink style={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'white'
                }}>Add recipes</NavLink></li>
                <li style={{marginTop: 24}}><NavLink style={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'white'
                }}>My recipes</NavLink></li>
                <li style={{marginTop: 24}}><NavLink style={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'white'
                }}>Favorite</NavLink></li>
                <li style={{marginTop: 24}}><NavLink style={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'white'
                }}>Shopping list</NavLink></li>
            </ul>
        </div>
    )
}