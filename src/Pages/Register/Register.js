import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/ContextProvider';
import useTitle from '../../Hooks/Usetitle';

const Register = () => {
    const { createUser, user, googleLogIn } = useContext(authContext)
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);



    useTitle('Register');
    const navigate = useNavigate()

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';




    const handleUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const role = form.role.value;
        const email = form.email.value;
        const password = form.password.value;

        const singleUser = { name, role, email };


        fetch('https://assignment-12-server-xi.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    setUsers(data)
                }
            })

        createUser(email, password)
            .then(newUser => {
                const user = newUser.user;
                console.log(user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch((error) => {
                setError(error?.message);

            });

    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(newUser => {
                const user = newUser.user;
                const { displayName, email } = user;
                const myUser = {
                    name: displayName,
                    role: 'User',
                    email
                }
                console.log(myUser)
                fetch('https://assignment-12-server-xi.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(myUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            setUsers(data)
                        }
                    })

            })
            .catch(err => {
                console.error(err)
                setError(err?.message)
                navigate(from, { replace: true });
            })
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
                                <input required name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select required name='role' className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Role?</option>
                                    <option>User</option>
                                    <option>Seller</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name='email' type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required name='password' type="password" placeholder="Password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleLogIn} className="btn btn-outline btn-success">Sign In With Google</button>
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