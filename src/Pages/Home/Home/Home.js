import React from 'react';
import useTitle from '../../../Hooks/Usetitle';
import About from '../../Shared/About/About';
import Carousel from '../../Shared/Carousel/Carousel';
import Contact from '../../Shared/Contact/Contact';
import Services from '../../Shared/Services/Services';
import MobileContainer from '../MobileContainer/MobileContainer';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <MobileContainer></MobileContainer>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;