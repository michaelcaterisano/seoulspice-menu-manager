const getLocations = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SEOULSPICE_API_URL}/locations`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const locations = response.json();
    return locations;
  } catch (error) {
    console.log(error);
  }
};

const getIngredients = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SEOULSPICE_API_URL}/ingredients`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const ingredients = response.json();
    return ingredients;
  } catch (error) {
    console.log(error);
  }
};

export {getLocations, getIngredients};
