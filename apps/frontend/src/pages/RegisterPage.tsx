import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  // STATES
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // ERROR STATES
  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // VALIDATION
  const validateForm = () => {
    let isValid = true;

    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    // USERNAME
    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    } else if (username.length < 3) {
      setUsernameError("Username must be minimum 3 characters");
      isValid = false;
    }

    // EMAIL
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter valid email");
      isValid = false;
    }

    // PASSWORD
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setPasswordError(
        "Use 6+ chars with uppercase, lowercase, number & special character"
      );

      isValid = false;
    }

    return isValid;
  };

  // REGISTER
  const handleRegister = () => {
    const isValid = validateForm();

    if (!isValid) return;

    console.log({
      username,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex bg-white">

      {/* LEFT SECTION */}
      <div className="hidden md:flex w-1/2 bg-[#3E628F] items-center justify-center p-10">
        <div className="text-center text-white max-w-md">

          <h1 className="text-4xl font-bold mb-6">
            Join Trade Bazzer
          </h1>

          <p className="text-xl leading-9 text-gray-100">
            Create your account and explore seamless shopping experiences.
          </p>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F5F5F5] px-6 py-10">

        <div className="w-full max-w-lg">

          <h2 className="text-4xl font-semibold text-[#2D5B8A] mb-3">
            Trade Bazzer
          </h2>

          <p className="text-gray-500 text-lg mb-10">
            Create your account
          </p>

          {/* USERNAME */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-3">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#3E628F]"
            />

            {usernameError && (
              <p className="text-red-500 mt-2 text-sm">
                {usernameError}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-3">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#3E628F]"
            />

            {emailError && (
              <p className="text-red-500 mt-2 text-sm">
                {emailError}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-8">
            <label className="block text-lg font-semibold mb-3">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#3E628F]"
            />

            {passwordError && (
              <p className="text-red-500 mt-2 text-sm">
                {passwordError}
              </p>
            )}
          </div>

          {/* REGISTER BUTTON */}
          <button
            onClick={handleRegister}
            className="w-full bg-[#EF724D] hover:bg-[#e9643d] cursor-pointer text-white font-semibold py-4 rounded-xl transition duration-300"
          >
            Register
          </button>

          {/* LOGIN NAVIGATION */}
          <p className="text-center text-gray-500 mt-8 text-lg">
            Already have an account?{" "}

            <span
              onClick={() => navigate("/")}
              className="text-[#2D5B8A] cursor-pointer font-medium hover:underline"
            >
              Log in
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;