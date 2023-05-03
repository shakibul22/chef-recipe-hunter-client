import React from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const RecipeDetailsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipeDetailsLayout;