import React from "react";
import RestaurantItem from "./RestaurantItem";
import { Link } from 'react-router-dom';

const Restaurant = () => {
  return (
    <div>
      <div className="headline">
        <div className="titles">
          <h3>Restaurant Name</h3>
        </div>

        <div className="titles2">
          <div>
            <h3>Details</h3>
          </div>
          <div>
            <Link to="/form">
              <button>+ Add</button>
            </Link>
          </div>
        </div>
      </div>

      <RestaurantItem />
    </div>
  );
};

export default Restaurant;
