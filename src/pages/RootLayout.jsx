import { Outlet } from "react-router-dom";
import HeaderCm from "../components/header/Header";

export default function RootLayoutCm() {
  return (
    <>
      <HeaderCm />
      <Outlet />
    </>
  );
}
