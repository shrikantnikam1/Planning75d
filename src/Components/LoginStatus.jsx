
import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Switch between logged in and logged out
  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Login Status</h1>

      {/* Show a different message based on state */}
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <p>Please log in.</p>
      )}

      {/* Show instructions only when logged out */}
      {!isLoggedIn && (
        <p>Sign in to continue to your account.</p>
      )}

      <button onClick={handleToggle}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginStatus;
