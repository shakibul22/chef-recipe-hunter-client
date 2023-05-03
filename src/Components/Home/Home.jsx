import React, { useContext, useEffect, useState } from 'react';
import "./Home.css"
import { AuthContext } from '../../Providers/AuthProvider';
import Banner from '../Banner/Banner';
import ChefRecipe from '../ChefRecipe/ChefRecipe';

const Home = () => {
    const user = useContext(AuthContext);
    const [recipeDatas, setRecipeDatas] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/chef")
        .then((response) => response.json())
        .then((data) => setRecipeDatas(data));
    }, []);
  
    console.log(recipeDatas);
    return (
        <div className='home '>

            <Banner></Banner>
            <div className='text-center '><h2 className='text-4xl mb-12 mx-auto items-center font-extrabold text-orange-300 my-5'>Our Respected Chef</h2></div>
            <div className='grid grid-cols-1  p-5 md:grid-cols-3  justify-center gap-5 mb-4'>
                {
                    recipeDatas.map(recipeData=><ChefRecipe recipeData={recipeData} key={recipeData.id}></ChefRecipe>)
                }
            </div>
        </div>
    );
};

export default Home;