// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";
import CardDetails from "../Card/CardDetails";
import HomePageCard from "../Card/HomePageCard";
import HomeHeader from "./HomeHeader";
import MenuSection from "./MenuSection";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <HomeHeader></HomeHeader>
      <HomePageCard></HomePageCard>

      <div className="my-8 grid md:grid-cols-3 gap-12">
        {chefData.map((data) => (
          <CardDetails key={data.id} data={data}></CardDetails>
        ))}
      </div>

      <MenuSection></MenuSection>
    </div>
  );
};

export default Home;
