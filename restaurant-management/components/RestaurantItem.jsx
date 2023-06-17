import React from "react";
import { Link } from 'react-router-dom';

const RestaurantItem = () => {
  const details = [
    {
      name: "Jeroth Sweet Hub",
      information: {
        cuisine: "Nigerian Native Dishes",
        location: "Kiwatule",
      },
    },
    {
      name: "TasteBuds",
      information: {
        cuisine: "All Fast Foods",
        location: "Nsambya",
      },
    },
    {
      name: "Fine Bite",
      information: {
        cuisine: "Pizzeria",
        location: "Wandegeya",
      },
    },
  ];

  return (
    <div>
      {details.map((item, index) => (
        <div className="container" key={index}>
          <Link 
            to={`/details/${encodeURIComponent(item.name)}`} 
            style={{ textDecoration: "none", color: "inherit" }}
            >
            <div className="item">
              <h2>{item.name}</h2>
            </div>
          </Link>
          <div className="item2">
            <p>Cuisine: {item.information.cuisine}</p>
            <p>Location: {item.information.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantItem;
