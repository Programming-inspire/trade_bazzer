export const validateEmail = (email: string): string => {
  if (!email) {
    return "Email is required";
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Enter valid email";
  }

  return "";
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return "Password is required";
  }

  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      password
    )
  ) {
    return "Use 6+ chars with uppercase, lowercase, number & special character";
  }

  return "";
};

export const validateUsername = (username: string): string => {
  if (!username) {
    return "Username is required";
  }

  if (username.length < 3) {
    return "Username must be minimum 3 characters";
  }

  return "";
};