import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const CardDetails = ({data}) => {

    const { id,  chefName, yearsOfExperience, numRecipes, likes, chefPicture} = data;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><LazyLoad height={200} offset={300}>
  <img className='rounded' src={chefPicture} alt="Shoes" /></LazyLoad></figure>
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