import React from "react";
import "./style.css";
import Input from "../../input/Input";
// import { FaSearch } from "react-icons/fa";
const FilterSection = () => {
  return (
    <>
      <form className="filter bg">
          <div>
            <label for="" className="location-label">Location : </label>
            <Input
              className="form-control"
              type="text"
              placeholder="Select Your Location... "
            />
          </div>
          <div>
            <label for="" className="location-label"> Type: </label>
            <select className="form-select" id="rooms">
              <option value="Choose">Choose</option>
              <option value="Rent">Rent</option>
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select>
          </div>
          <div>
            <label for="" className="location-label"> Category: </label>
            <select className="form-control" id="Adult" >
              <option className="optn">Choose Category </option>
              <option className="optn" value="1">Appartments </option>
              <option className="optn" value="2">Farm Houses </option>
              <option className="optn" value="3">Houses </option>
              <option className="optn" value="4">Villas </option>
            </select>
          </div>
          <div>
            <button className="filter-btn"> SEARCH</button>
          </div>
      </form>
    </>
  );
};

export default FilterSection;
