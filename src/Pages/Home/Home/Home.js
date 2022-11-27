import React from 'react';
import useTitle from '../../../Hooks/Usetitle';
import Carousel from '../../Shared/Carousel/Carousel';
import MobileContainer from '../MobileContainer/MobileContainer';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Carousel></Carousel>
            <MobileContainer></MobileContainer>
        </div>
    );
};

export default Home;