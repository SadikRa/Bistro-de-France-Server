import React from 'react';

const HomePageCard = () => {
    return (
        <div>
            <div className="grid md:grid-cols-4 gap-10 my-16">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="mx-auto">
              <img
                className="rounded h-44"
                src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=1380&t=st=1683041980~exp=1683042580~hmac=9d28eb1dc71ca9ee5449bccb183cd05abb927bff37397fb66e54d56668336473"
                alt=""
              />
            </div>
            <h2 className="card-title mx-auto">Quality Cuisine</h2>
            <p className="text-center">
              Our chefs use only the freshest ingredients to prepare dishes that
              are bursting with flavor. We take pride in our quality cuisine and
              strive to provide our customers with an unforgettable dining
              experience.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="mx-auto">
              <img
                className="rounded h-44"
                src="http://loveyourgut.com/wp-content/uploads/imagesCAGT4VWB.jpg"
                alt=""
              />
            </div>
            <h2 className="card-title mx-auto">Fresh Food</h2>
            <p className="text-center">
              At Bistro de France, we believe that fresh is best. Our menu
              features seasonal ingredients that are carefully selected to
              ensure that every dish is packed with nutrients and bursting with
              flavor. You can taste the difference in every bite.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="mx-auto">
              <img
                className="rounded h-44"
                src=" https://cdn0.iconfinder.com/data/icons/miscellaneous-11-solid/128/Food-Service_restaurant_service_food_workers-512.png"
                alt=""
              />
            </div>
            <h2 className="card-title mx-auto">Friendly Staff</h2>
            <p className="text-center">
              Our team is dedicated to providing you with exceptional service
              and making your dining experience memorable. From the moment you
              walk through our doors, you will be greeted with a warm smile and
              a friendly hello.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="mx-auto">
              <img
                className="rounded h-44"
                src="https://cdn.vectorstock.com/i/1000x1000/19/71/food-service-icon-vector-5081971.webp"
                alt=""
              />
            </div>
            <h2 className="card-title mx-auto">Easy Reservation</h2>
            <p className="text-center">
              Booking a table at Bistro de France is easy and convenient. You
              can make a reservation online or by phone, and our friendly staff
              will be happy to assist you with any questions you may have. We
              look forward to seeing you soon!
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default HomePageCard;