import React, {useEffect, useState} from "react";

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

  return (
    <div>
      <div>
        <select onChange={handleChange} value={locationId}>
          {locations.map((location) => (
            <option key={location._id} value={location._id}>
              {location.name}
            </option>
          ))}
        </select>
        <button onClick={handleClick}>select</button>
      </div>
    </div>
  );
};

export default ChooseLocation;
