'use client'
import React from 'react';

const NavBar = () => {

    const [value, setValue] = React.useState(0);
    return (
        <div>
            NAVBAR = {value}
        </div>
    );
};

export default NavBar;