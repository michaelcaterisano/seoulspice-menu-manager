import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {
  getLocations,
  getIngredients,
  setIngredientsOutOfStock,
} from "../services/apiService";
import ChooseLocation from "./ChooseLocation";
import Ingredients from "./Ingredients";

const Profile = () => {
  const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
  const [locations, setLocations] = useState(null);
  const [locationId, setLocationId] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(async () => {
    const token = await getAccessTokenSilently();
    setToken(token);
    const locations = await getLocations(token);
    setLocations(locations);
  }, []);

  const selectLocation = async (locationId) => {
    setLocationId(locationId);
    const ingredients = await getIngredients(token);
    setIngredients(ingredients);
  };

  const handleSubmit = (ingredients) => {
    setIngredientsOutOfStock({token, ingredients, locationId});
  };

  return (
    <div>
      {isAuthenticated && locations && (
        <div>
          {/* profile
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3> */}
          {!locationId && (
            <ChooseLocation
              locations={locations}
              selectLocation={selectLocation}
            />
          )}
          {ingredients && (
            <Ingredients
              ingredients={ingredients}
              locationId={locationId}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
