import React, { useState } from "react";
import { Link } from 'react-router-dom';

const UpdateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    location: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the formData
    console.log(formData);
    // Reset the form
    setFormData({
      name: "",
      cuisine: "",
      location: "",
    });
  };

  return (
    <>
    <div className="home">
        <Link to="/"><img src="../../../src/assets/images/home.png" /></Link>
    </div>
      <div className="form">
        <h1>Update Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="form-item">
              <label>
                <span>Name:</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="on"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                Cuisine:
                <input
                  type="text"
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                Image:
                <input type="file" name="image" className="img_input" onChange={handleImageUpload} />
              </label>
            </div>
            <div className="form-item">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateForm;
