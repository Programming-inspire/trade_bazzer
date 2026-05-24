import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  onEnterPress?: () => void;
  disabled?: boolean;
}

const PasswordInput = ({
  value,
  onChange,
  error,
  placeholder = "Enter your password",
  onEnterPress,
  disabled = false,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && onEnterPress?.()
          }
        className={`w-full border border-gray-300 rounded-xl px-5 py-4 pr-14 outline-none focus:ring-2 focus:ring-[#3E628F]${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />

        <button
        type="button"
        disabled={disabled}
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? (
            <FiEyeOff size={22} />
          ) : (
            <FiEye size={22} />
          )}
        </button>
      </div>

      {error && (
        <p className="text-red-500 mt-2 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;