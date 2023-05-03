import React from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import { FaThumbsUp  } from "react-icons/fa";
import ChefDetailsCard from './ChefDetailsCard';
const ChefDetails = () => {


    const { id } = useParams()


    const data = useLoaderData()

  

    return (
        <div className='my-28 '>
         <div className='flex justify-center'>
         <div className=' flex sm:flex-col flex-col md:flex-row gap-20'>
                <div>
                    <img style={{width: "600px", height: "600px"}} className='rounded' src={data.chefPicture} alt=""  />
                </div>
                <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-4xl font-bold my-4'>{data.chefName}</h1>
                    <p className='w-96 my-4'>{data.bio}</p>
                    <p className='flex gap-5 text-2xl'>Likes {data.likes} <FaThumbsUp className='text-warning' /></p>
                    <p className='text-2xl'> Number Of Recipes:{data.numRecipes}</p>
                    <p className='text-2xl'>Years Of Experience:{data.yearsOfExperience}</p>
                </div>
                </div>
           </div>
         </div>
         <div className='my-20 grid md:grid-cols-3 gap-12'>
                {
                    data.ViewRecipes.map((cards)=> <ChefDetailsCard cards={cards}></ChefDetailsCard>)
                }
         </div>
        </div>
    );
};

export default ChefDetails;