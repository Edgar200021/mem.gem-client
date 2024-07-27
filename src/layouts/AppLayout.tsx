import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const AppLayout = () => {
  return (
    <div className="py-5">
      <Header className="mb-6" />
      <Outlet />
    </div>
  );
};
