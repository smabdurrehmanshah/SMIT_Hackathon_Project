import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default AppLayout;
