import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart,FaRegHeart, FaStar } from "react-icons/fa";

const Recipes = ({ recipe }) => {
    const { recipeName, cookingMethod, img, ratings, ingredients, price } = recipe;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
      const message = isFavorite ? 'Removed from favorites' : 'Added to favorites';
      toast(message);
    };

    return (
        <div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                    <img className=" rounded-t-lg" src={img} alt="product image" />
              
                <div className="px-5 pt-3 pb-5">
                       <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{recipeName}</h5>
                  
                   
                        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{cookingMethod}</h5>
                      <div className="flex items-center mt-3 mb-5">
                      
                        <FaStar className="w-5 h-5 text-yellow-300"></FaStar>
                        <FaStar className="w-5 h-5 text-yellow-600"></FaStar>
                        <FaStar className="w-5 h-5 text-yellow-400"></FaStar>
                        <FaStar className="w-5 h-5 text-yellow-200"></FaStar>
                        <FaStar className="w-5 h-5 text-yellow-100"></FaStar>
                        <span className="bg-blue-100 text-blue-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{ratings}</span>
                    </div>
                    <div className="flex  justify-between items-center gap-8">
                        <span className="flex items-center justify-start text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                      

                   <button className='flex  justify-end items-center' onClick={handleFavoriteClick}>
                       {isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="black" size={24} />}
                   </button>


                        <ToastContainer />
                    </div>
                    <div >
                    <div className="divider divider-primary "></div>
                        <h2 className='py-5'> <span className='text-2xl font-bold text-orange-400 '>Ingredients:</span></h2>
                        <h4 className='text-purple-500'>1. {ingredients[0]}</h4><br />
                        <h4 className='text-purple-500'>2. {ingredients[1]}</h4><br />
                        <h4 className='text-purple-500'>3. {ingredients[2]}</h4><br />
                        <h4 className='text-purple-500'>4. {ingredients[3]}</h4><br />
                        <h4 className='text-purple-500'>5. {ingredients[4]}</h4>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Recipes;