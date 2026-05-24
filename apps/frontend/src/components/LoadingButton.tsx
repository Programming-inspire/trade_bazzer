interface LoadingButtonProps {
  text: string;
  loadingText?: string;
  isLoading: boolean;
  onClick: () => void;
}

const LoadingButton = ({
  text,
  loadingText = "Loading...",
  isLoading,
  onClick,
}: LoadingButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`
        w-full text-white font-semibold py-4 rounded-xl transition duration-300
        ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#EF724D] hover:bg-[#e9643d] cursor-pointer"
        }
      `}
    >
      {isLoading ? loadingText : text}
    </button>
  );
};

export default LoadingButton;