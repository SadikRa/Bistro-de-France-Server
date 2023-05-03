// eslint-disable-next-line no-unused-vars
import React, { useContext, useDebugValue } from "react";
import Card from "../Card/Card";
import HomePageCard from "../Card/HomePageCard";
import HomeHeader from "./HomeHeader";
import MenuSection from "./MenuSection";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {

  const {loading} = useContext(AuthContext)
  
  if (loading){
  return  <> loading...  <progress className="progress w-56"></progress></>
  }


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
