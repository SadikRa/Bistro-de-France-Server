// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../Card/Card";
import HomePageCard from "../Card/HomePageCard";
import HomeHeader from "./HomeHeader";
import MenuSection from "./MenuSection";

const Home = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <HomePageCard></HomePageCard>
      <Card></Card>
      <MenuSection></MenuSection>
    </div>
  );
};

export default Home;
