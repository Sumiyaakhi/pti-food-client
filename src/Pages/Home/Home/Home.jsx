import React from 'react';
import Banner from '../Banner/Banner';
import Recommended from '../ImageGallery/ImageGallery';
import ChefCards from '../ChefCards/ChefCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recommended></Recommended>
            <ChefCards></ChefCards>
        </div>
    );
};

export default Home;