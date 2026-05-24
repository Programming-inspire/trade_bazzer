import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const validateForm = () => {
    let isValid = true;

    setEmailError("");
    setPasswordError("");

    // EMAIL VALIDATION
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter valid email");
      isValid = false;
    }

    // PASSWORD VALIDATION
    if (!password) {
    setPasswordError("Password is required");
    isValid = false;
    } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
    )
    ) {
    setPasswordError(
        "Password must contain uppercase, lowercase, number, special character and minimum 6 characters"
    );

  isValid = false;
}

    return isValid;
  };

  const handleLogin = () => {
    const isValid = validateForm();

    if (!isValid) return;

    console.log({
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
            Welcome to Trade Bazzer
          </h1>

          <p className="text-xl leading-9 text-gray-100">
            Your premier destination for quality products and seamless
            shopping experiences.
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
            Welcome back
          </p>

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

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#EF724D] hover:bg-[#e9643d] cursor-pointer text-white font-semibold py-4 rounded-xl transition duration-300"
          >
            Log In
          </button>

          {/* REGISTER */}
          <p className="text-center text-gray-500 mt-8 text-lg">
            Don't have an account?{" "}

            <span
              onClick={() => navigate("/register")}
              className="text-[#2D5B8A] cursor-pointer font-medium hover:underline"
            >
              Register here
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;