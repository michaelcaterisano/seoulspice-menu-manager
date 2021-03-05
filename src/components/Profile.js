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

  const handleSubmit = async (ingredients) => {
    await setIngredientsOutOfStock({token, ingredients, locationId});
    setIngredients(null);
    setLocationId(null);
  };

  return (
    <section>
      {isAuthenticated && locations && (
        <div>
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
    </section>
  );
};

export default Profile;
