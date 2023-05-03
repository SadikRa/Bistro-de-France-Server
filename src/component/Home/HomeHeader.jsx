import React from 'react';

import backgroundImage from "../../assets/banner.jpg";
const HomeHeader = () => {
    return (
        <div>
            <div
        className="flex items-center mt-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          height: "800px",
          borderRadius: '10px',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" w-full  md:w-[50%] md:ms-8">
          <h1 className="text-6xl font-bold text-orange-400 mb-6">
            Welcome to Bistro de France
          </h1>
          <p className="mb-6 text-sky-600">
            Indulge in the flavors of authentic French cuisine at our cozy
            bistro. Our chefs use only the freshest, high-quality ingredients to
            create delicious dishes that transport you straight to the streets
            of Paris. From classic French onion soup to buttery escargot and
            savory coq au vin, we have something for everyone to savor. Pair
            your meal with a glass of wine from our extensive list, and finish
            with a decadent dessert like crème brûlée or tarte Tatin.
          </p>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
        </div>
    );
};

export default HomeHeader;