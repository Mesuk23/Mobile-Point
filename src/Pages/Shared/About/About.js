import React from 'react';
import { Link } from 'react-router-dom';
import about from './about.jpg'

const About = () => {
    return (

        <div>
            <hr className='mt-5' />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
                <div className='px-5'>
                    <img alt='about' src={about}></img>
                </div>

                <div className='col-md-6 px-5'>
                    <h1 className='text-center py-5 text-4xl'>About Us</h1> <hr />
                    <p className='my-3'>It is one of the best site to buy second hand mobile. We provide warranty and guraranty for each and every products. It is one of the biggest site to buy the mobile. We assure you the best service that you want from us. We also give free service warranty for each and every products. We provide you the services that you wants form us. You have not be tensed about our product . It will be fresh and best quality. Be with us.</p>
                    <Link to='/products'>
                        <button className='btn btn-primary'>Explore us</button>
                    </Link>

                </div>


            </div>
            <hr className='mb-5' />

        </div>

    );
};

export default About;