
import { AcademicCapIcon, HandThumbUpIcon, } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ChefRecipe = ({ recipeData }) => {
  const { id, name, description, experience, picture, likes } = recipeData;

  return (
    <div>
      <div className="card card-compact w-[55vh] lg:w-full bg-base-100 shadow-xl">
        <figure><img className='w-full' src={picture} alt="chef" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex flex-row justify-around items-center">
            <p  className="flex flex-row  gap-3 items-center"><HandThumbUpIcon className="h-6 w-6 text-blue-500" />{likes}</p>
            <p  className="flex flex-row  gap-3 items-center"><AcademicCapIcon className="h-6 w-6 text-blue-500" />{experience}</p>

          </div>
          <Link to={`/recipeData/${recipeData?.id}`}>
            <button className='btn btn-info'>View Recipe</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ChefRecipe;



