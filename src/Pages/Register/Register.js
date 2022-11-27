import React, { useContext, useState } from 'react';
import { authContext } from '../../Context/ContextProvider';
import useTitle from '../../Hooks/Usetitle';

const Register = () => {
    const { createUser } = useContext(authContext)

    const [error, setError] = useState(false);
    useTitle('Register');

    const handleUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // const user = { name, email, password };

        createUser(email, password)
            .then(newUser => {
                const user = newUser.user;
                console.log(user);
                form.reset();
            })
            .catch((error) => {
                setError(error?.message);

            });

    }
    return (
        <div>
            <form onSubmit={handleUser} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
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
                            {
                                error && <p className='text-red-700'>{error}</p>
                            }
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Register;