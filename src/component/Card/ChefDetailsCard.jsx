import React from 'react';

const ChefDetailsCard = ({cards}) => {
    console.log(cards.recipeImage)
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
      <p>{cards.cookingMethod}</p>
      <p>{cards.Rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Favorite button</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefDetailsCard;