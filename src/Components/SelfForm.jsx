
import { useState } from "react";

function App() {
  // Store the password text
  const [password, setPassword] = useState("");

  // Store whether the password is visible
  const [showPassword, setShowPassword] = useState(false);

  // Handle typing
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Switch visibility on or off
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>Login Form</h1>

      <label htmlFor="password">Password: </label>

      <input
        id="password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="button" onClick={handleToggle}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <p>Current password: {password}</p>
    </div>
  );
}

export default App;
