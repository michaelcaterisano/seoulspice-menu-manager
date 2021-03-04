import {useAuth0} from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
import {useTheme} from "@material-ui/core/styles";

const LogoutButton = () => {
  const {logout} = useAuth0();
  const theme = useTheme();

  return (
    <Button
      style={{backgroundColor: theme.palette.info.light}}
      variant="contained"
      onClick={() => logout({returnTo: window.location.origin})}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
