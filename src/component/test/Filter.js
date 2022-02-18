import React from "react";
import { useState } from "react";
import { mealFilter } from "../Server/api";
import FilterData from "./FilterData";
import { BiSearch } from "react-icons/bi";
const Filter = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const filterData = () => {
    mealFilter(name)
      .then((res) => {
        if (res.status === 200) {
          setError(true);
        }
        setData(res && res.data && res.data.meals);
      })
      .catch((err) => {
        setError(false);
        console.log(err);
      });
  };

  console.log("daaa", data);
  return (
    <React.Fragment>
      <div className="header-meal">
        <div className="sub-wrap">
          <h3>Meals</h3>
        </div>
        <div className="sub-wrap">
          <input
            type="text"
            placeholder="Search by categories"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="search"
          />
          <button onClick={filterData} className="search-btn">
            <BiSearch />
          </button>
        </div>
      </div>

      {name && data ? (
        <FilterData data={data} name={name} />
      ) : (
        name &&
        error && (
          <div className="search-header">Nothing Found in this Search</div>
        )
      )}
    </React.Fragment>
  );
};

export default Filter;
