import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    // textAlign: "center",
  },
  button: {
    margin: "20px 0 0 0",
  },
}));

const Ingredients = ({ingredients, locationId, onSubmit}) => {
  const classes = useStyles();

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
    <Paper className={classes.paper}>
      <FormGroup column>
        <Box component="h1">Choose a location to edit</Box>
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
        <Button
          size="large"
          className={classes.button}
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          submit
        </Button>
      </FormGroup>
    </Paper>
  );
};

export default Ingredients;
