import {useAuth0} from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
import {useTheme} from "@material-ui/core/styles";

const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();
  const theme = useTheme();

  return (
    <Button
      style={{backgroundColor: theme.palette.info.light}}
      variant="contained"
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default LoginButton;
