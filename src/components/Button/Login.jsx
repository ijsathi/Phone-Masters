import React from 'react';
import useAuth from '../../context/useAuth';

const Login = () => {
    const {user, singInUsingGoogle, logOut} = useAuth();
    return (
        <>
            {/* <!-- Button trigger modal -->  */} 
            {/* <div type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">{user.displayName}</div>  */}
           { user?.email ? <button onClick={logOut} type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
              <span className="fa fa-sign-in me-1"></span>  Logout
            </button>  : <div> <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
              <span className="fa fa-sign-in me-1"></span>  Login  {user.displayName}
            </button> 

            {/* <!-- Modal -->  */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button onClick={singInUsingGoogle} className="btn btn-primary w-100 mb-4">
                               <span className='fab fa-google me-2'></span> Sign in with Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                               <span className='fab fa-facebook me-2'></span> Sign in with Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input name='email' type="email" className="form-control" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input name='password' type="password" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>  }
        </>
    );
};

export default Login;