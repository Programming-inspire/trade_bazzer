import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import LoadingButton from "../components/LoadingButton";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../utils/validation";

const RegisterPage = () => {
  const navigate = useNavigate();

  // STATES
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ERROR STATES
  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // VALIDATION
const validateForm = () => {
  let isValid = true;

  const usernameValidation = validateUsername(username);
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);

  setUsernameError(usernameValidation);
  setEmailError(emailValidation);
  setPasswordError(passwordValidation);

  if (
    usernameValidation ||
    emailValidation ||
    passwordValidation
  ) {
    isValid = false;
  }

  return isValid;
};

  // REGISTER
const handleRegister = async () => {
  const isValid = validateForm();

  if (!isValid) return;

  setIsLoading(true);

  setTimeout(() => {
    console.log({
      username,
      email,
      password,
    });

    setIsLoading(false);
  }, 1500);
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
              disabled={isLoading}
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
              disabled={isLoading}
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

            <PasswordInput
                value={password}
                onChange={setPassword}
                error={passwordError}
                onEnterPress={handleRegister}
                disabled={isLoading}
            />
            </div>

          {/* REGISTER BUTTON */}
            <LoadingButton
            text="Register"
            loadingText="Creating account..."
            isLoading={isLoading}
            onClick={handleRegister}
            />

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