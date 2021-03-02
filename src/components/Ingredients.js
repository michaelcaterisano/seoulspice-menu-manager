import React, {useEffect, useState} from "react";

const Ingredients = ({ingredients, locationId}) => {
  return (
    <form>
      {ingredients.map((ingredient) => {
        return (
          <label key={ingredient._id}>
            <input
              type="checkbox"
              defaultChecked={ingredient.locations.includes(locationId)}
            ></input>
            {ingredient.name}
          </label>
        );
      })}
    </form>
  );
};

export default Ingredients;
