import { toast } from "react-toastify";

export const errorMessage = (error) => {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  );
};

export const displayError = (error) => {
  toast.error("Captcha Does Not Match", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    theme: "light",
  });
};
