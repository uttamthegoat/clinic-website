import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
    return <ToastContainer
    position="top-right" // toast position
    autoClose={5000} // auto close after 5000ms (5 seconds)
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light" // or "dark"
  />
}

export default Toaster;