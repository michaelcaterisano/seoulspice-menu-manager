import React, {useEffect, useState} from "react";

const Ingredients = ({ingredients, locationId, onSubmit}) => {
  let initialState = ingredients.map((ingredient) => {
    return {
      id: ingredient._id,
      name: ingredient.name,
      outOfStock: ingredient.outOfStockAt.includes(locationId),
    };
  });

  const [state, setState] = useState(initialState);

  const handleChange = (e, id) => {
    if (e.target.checked) {
      setState(
        state.map((item) => {
          if (item.id === id) {
            item.outOfStock = true;
          }
          return item;
        })
      );
    } else {
      setState(
        state.map((item) => {
          if (item.id === id) {
            item.outOfStock = false;
          }
          return item;
        })
      );
    }
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  return (
    <div>
      {state.map((item) => {
        return (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={item.outOfStock}
              onChange={(e) => handleChange(e, item.id)}
            ></input>
            {item.name}
          </label>
        );
      })}
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Ingredients;
