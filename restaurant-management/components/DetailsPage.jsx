import React from "react";
import { Link } from 'react-router-dom';
// import axios from '../axiosConfig';

const DetailsPage = () => {
  return (
    <>
      <div className="home">
        <Link to="/" style={{ textDecoration: "none" }}>
            <button>Back</button>
        </Link>
      </div>

      <div className="box">
        <div className="content1">
          <img src="../../../src/assets/images/prop.jpg" />
        </div>
        <div className="content">
          <div>
            <h1>Sweet Spot</h1>
          </div>
          <div>
            <h4>Cuisine: </h4>
            <p>Local Foods, Tropical Foods, Natural Juice</p>
            <h4>Location: </h4>
            <p>Kabuusu, Next to Kobil.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
