import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
        <InputLabel htmlFor="age-native-simple">Select Location</InputLabel>
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
      <Button onClick={handleClick} variant="contained" color="primary">
        next
      </Button>
    </div>
  );
};

export default ChooseLocation;
