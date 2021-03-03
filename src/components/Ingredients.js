import React, {useEffect, useState} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

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
    <React.Fragment>
      <FormGroup column>
        <h3>Mark items out of stock</h3>
        {state.map((item) => {
          return (
            <FormControlLabel
              control={
                <Switch
                  checked={item.outOfStock}
                  onChange={(e) => handleChange(e, item.id)}
                  name={item.id}
                />
              }
              label={item.name}
            />
          );
        })}
      </FormGroup>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        submit
      </Button>
    </React.Fragment>
  );
};

export default Ingredients;
