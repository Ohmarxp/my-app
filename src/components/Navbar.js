import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='toggleButton'>
                <button></button>
            </div>
            <div className='links'>
                <Link to='/Home'>Home</Link>
                <Link to='/Projects'>Projects</Link>
                <Link to='/Experience'>Experience</Link>
            </div>
        </div>
    )
}
export default Navbar;