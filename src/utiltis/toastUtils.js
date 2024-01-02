// toastUtils.js
import toast from 'react-hot-toast';

export const showErrorToast = (errorMessage) => {
  toast.error(`${errorMessage}  `, {
    position: "top-left",
    style: {
      backgroundColor: "#e20d29",
      color: "7c7b7e",
      width: "500px",
    },
  });
};
