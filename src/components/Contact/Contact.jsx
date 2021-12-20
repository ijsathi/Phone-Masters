import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center my-4 py-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img height='350px' width='350px' src="https://freepngimg.com/thumb/email_marketing/64831-email-internet-download-free-image.png" alt="Contact Us" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleForm" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="Israt Zahan Sathi" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Write Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type='submit' className='btn btn-outline-primary'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;