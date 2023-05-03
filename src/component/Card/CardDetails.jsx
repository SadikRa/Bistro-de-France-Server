import React from 'react';
import { Link } from 'react-router-dom';

const CardDetails = ({data}) => {

    const { id,  chefName, yearsOfExperience, numRecipes, likes, chefPicture} = data;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='rounded' src={chefPicture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{chefName}</h2>
    <p>Years Of Experience:{yearsOfExperience}</p>
    <p> Number Recipes: {numRecipes}</p>
    <p>Likes: {likes}</p>
    <div className="card-actions justify-end">
      <Link to={`/chefDetails/${id}`}><button className="btn btn-primary">View Recipes Button</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;