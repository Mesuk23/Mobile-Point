import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/ContextProvider';
import useTitle from '../../Hooks/Usetitle';

const Login = () => {
    const [error, setError] = useState(false);
    useTitle('Login');
    const navigate = useNavigate()
    const { Login, } = useContext(authContext);

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        Login(email, password)
            .then(currentUser => {
                console.log(currentUser);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(err => {
                setError(err?.message);
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Log In now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='py-3'>New to the website?. Please <Link className='text-blue-600' to='/register'>Register</Link></p>



                            <p>
                                {
                                    error && <p className='text-rose-700'>{error}</p>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;