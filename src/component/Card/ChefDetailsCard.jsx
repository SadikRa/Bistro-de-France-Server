import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
 

const ChefDetailsCard = ({cards}) => {
    

    const notify = () => toast("Your favorite recipe successfully added");


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={cards.recipeImage} alt="Images link not work." /></figure>
  <div className="card-body">
    <h2 className="card-title">{cards.recipeName}</h2>
    <ul>
        {cards.Ingredients.map((ingredient, index) => (
          <li key={index}>{index + 1}. {ingredient}</li>
        ))}
      </ul>
      <p>Cooking Method:{cards.cookingMethod}</p>
      <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={cards.Rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span> {cards?.Rating}</span>
                </div>
    <div className="card-actions justify-end">
      <button onClick={notify} className="btn btn-primary">Favorite button</button>
      <ToastContainer />
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefDetailsCard;