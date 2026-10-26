import SelfForm from "./Components/SelfForm";

import { useState } from "react";

function App() {
  // Store the password text
  const [password, setPassword] = useState("");

  // Track whether the password is visible
  const [showPassword, setShowPassword] = useState(false);

  // Update the password when the user types
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Toggle password visibility
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h1>Login Form</h1>

      <div>
        <label htmlFor="username">Enter Username</label>
        <input id="username" type="text" />
      </div>

      <div>
        <label htmlFor="password">Enter Password</label>

        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="button" onClick={handleToggle}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
      </div>
      <br />
      <div>
        <SelfForm/>
      </div>
    </>
  );
}

export default App;