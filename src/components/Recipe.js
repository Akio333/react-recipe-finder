import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        <b>Ingredients:</b> <br />
        {ingredients.map(ingredient => (
          <li key={ingredient.key}>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <b>Total Calories: </b>
        {calories}
      </p>
      <img src={image} alt="" />
      <p align="center">
        <a href={url}>Check out recipe Here </a>
      </p>
    </div>
  );
};

export default Recipe;
