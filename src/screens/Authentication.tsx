import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LogInButton";
import LogoutButton from "../components/LogOutButton";

function AuthenticationScreen() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/weather');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div>
      <h1>Welcome</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default AuthenticationScreen;
