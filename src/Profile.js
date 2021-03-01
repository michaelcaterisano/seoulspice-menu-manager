import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

const Profile = () => {
  const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${process.env.REACT_APP_SEOULSPICE_API_URL}/ingredients`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setResponseData(responseData);
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }
  };

  return (
    isAuthenticated && (
      <div>
        <button onClick={callApi}>call api</button>
        <br />
        {responseData ? <p>{JSON.stringify(responseData)}</p> : null}
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )} */}
      </div>
    )
  );
};

export default Profile;
