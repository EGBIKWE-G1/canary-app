import React from "react";
import { Switch } from "react-router-dom";
import Header from "../../Components/Header/Header";
import NewHome from "../NewHome/NewHome";

const Home = ({ handleLogged }) => {
  return (
    <div>
      <Header isLogged={handleLogged} />
      <Switch>
        <NewHome />
      </Switch>
    </div>
  );
};

export default Home;
