import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2>404</h2>
            <NavLink to='/' className="btn btn-outline-primary">Go Back</NavLink>
        </div>
    );
};

export default NotFound;