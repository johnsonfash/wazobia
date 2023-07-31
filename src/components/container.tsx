import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Container = () => {
  return (
    <main>
      <Navbar />
      <div className="container py-4">
        <Outlet />
      </div>
    </main>
  );
};

export default Container;
