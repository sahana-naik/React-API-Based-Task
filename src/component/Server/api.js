import axios from "axios";

export const mealCategory = () => {
  return axios
    .get('https://www.themealdb.com/api/json/v1/1/categories.php',)
    .then((resData) => resData);
};


export const mealFilter = (name) => {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`,)
      .then((resData) => resData);
  };