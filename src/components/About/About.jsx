import React from 'react';
import { NavLink } from 'react-router-dom';
// import img from '../../images/img1.jpg'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className="lead mb-4">A mobile phone, cellular phone, cell phone, cellphone, handPhone, or hand phone, sometimes shortened to simply mobile, cell or just phone, is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area.Mobile phones are used for a variety of purposes, such as keeping in touch with family members, for conducting business, and in order to have access to a telephone in the event of an emergency. Some people carry more than one mobile phone for different purposes, such as for business and personal use.</p>
                        <NavLink to='/contact' className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img width="400px" height='400PX' src="https://sanidhyainfotech.com/wp-content/uploads/2021/06/app1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;