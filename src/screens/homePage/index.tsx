//import React from "react";
import Statistics from "./Statistics";
import ActiveUsers from "./ActiveUsers";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <ActiveUsers />
      <Advertisement />
      <Events />
    </div>
  );
}
