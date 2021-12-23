import React from 'react';
import './Footer.css';
import img1 from '../../images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className='f'>
            <div>
            <nav className="menu-bar2">
            <div className="menu-list2">
           <h2><span style={{fontWeight:'600',color:'rgb(150, 137, 137)', fontSize:"40px"}}>PHONE </span><span style={{color:"rgb(45, 76, 78)"}}> MASTERS</span></h2>              
            </div>
            <div className="menu-list2 ms-auto">
                <img style={{width:"20%"}} src={img1} alt="" />
            </div>
        </nav>
            </div>
            <div style={{paddingTop:"25px", textAlign:"center"}}>
                <hr />
                <p><small>Copyright By@<span style={{color:'rgb(1, 78, 83)'}}>I</span>srat Zahan Sathi - 2021</small></p>
            </div>
        </div>
        </div>
    );
};

export default Footer;