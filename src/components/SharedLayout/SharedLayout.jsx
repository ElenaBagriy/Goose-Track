import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const SharedLayout = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        </Suspense>
    );
  };

  export default SharedLayout;