import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipes from './Recipes';

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/chef/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }
  return (
   <div>
<div className="card lg:card-side bg-base-100 shadow-xl p-3">
  <figure><img src={item.picture} alt="Album"/></figure>
  <div className="card-body">
  <h2 className="card-title">{item.name}</h2>
    <h5 className=''>{item.description}</h5>
          <h5>Experience: {item.experience} years</h5>
          <h5>Like: {item.likes}</h5>
  </div>
</div>

 <div className='text-center '><h2 className='text-4xl mb-12 mx-auto items-center font-extrabold text-orange-300 my-5'>Recipes Features</h2></div>
   
      <div className='grid grid-cols-1  p-10 md:grid-cols-3  justify-center gap-5 mb-4'>
      {
     
      item?.recipes?.map(recipe=><Recipes recipe={recipe} key={recipe.ingredients}></Recipes>)
      }

      </div>
   </div>
  );
};

export default Details;
