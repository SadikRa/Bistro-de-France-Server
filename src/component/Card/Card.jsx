import React from 'react';
import CardDetails from './CardDetails';
import { useLoaderData, useParams } from 'react-router-dom';

const Card = () => {

    const chefData = useLoaderData();
    // console.log(chefData)


    return (
        <div>
           
           <div className="my-8 grid md:grid-cols-3 gap-12">
        {chefData.map((data) => (
          <CardDetails key={data.id} data={data}></CardDetails>
        ))}
      </div>


        </div>
    );
};

export default Card;