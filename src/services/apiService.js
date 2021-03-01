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
    const locations = await response.json();
    return locations;
  } catch (error) {
    console.log(error);
  }
};

export {getLocations};
