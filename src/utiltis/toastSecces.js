// toastUtils.js
import toast from 'react-hot-toast';

export const showSuccesToast = (errorMessage) => {
    toast.success(`${errorMessage} `, {
        position: "top-left",
        style: {
          backgroundColor: "green",
          color: "7c7b7e",
          width: "500px",
        }})
};
