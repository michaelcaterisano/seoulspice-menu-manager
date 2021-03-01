import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {getLocations} from "../services/apiService";

const ChooseLocation = () => {
  const {isAuthenticated, getAccessTokenSilently} = useAuth0();
  const [locations, setLocations] = useState(null);
  const [location, setLocation] = useState(null);
  const [token, setToken] = useState(null);
  const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });

  useEffect(async () => {
    const token = await getAccessTokenSilently();
    const locations = await getLocations(token);
    setLocations(locations);
  }, []);

  const handleChange = (location) => {
    console.log(location);
    // setLocation(location);
  };

  return (
    isAuthenticated && (
      <div>
        locations
        <br />
        {locations && (
          <select onChange={handleChange}>
            {locations.map((location) => (
              <option key={location._id} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        )}
        {location && <p>{location.name}</p>}
      </div>
    )
  );
};

export default ChooseLocation;
