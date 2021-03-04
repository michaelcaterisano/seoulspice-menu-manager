import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "350px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  nextButton: {
    margin: "5px 0 0 8px",
  },
}));

const ChooseLocation = ({locations, selectLocation}) => {
  const [locationId, setLocationId] = useState("");

  useEffect(() => {
    setLocationId(locations[0]._id);
  }, []);

  const handleChange = (e) => {
    setLocationId(e.target.value);
  };

  const handleClick = () => {
    selectLocation(locationId);
  };
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Box component="h1">Choose a location to edit</Box>

        <Select
          native
          value={locationId}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "age-native-simple",
          }}
        >
          {locations.map((location) => (
            <option key={location._id} value={location._id}>
              {location.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <br />
      <Button
        className={classes.nextButton}
        onClick={handleClick}
        color="primary"
        variant="contained"
      >
        next
      </Button>
    </div>
  );
};

export default ChooseLocation;
