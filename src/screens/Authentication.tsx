import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LogInButton";

function AuthenticationScreen() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/weather');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="h-screen">
      <h1 className="text-lg text-center">Welcome To Weather Application</h1>
      <LoginButton />
    </div>
  );
}

export default AuthenticationScreen;
