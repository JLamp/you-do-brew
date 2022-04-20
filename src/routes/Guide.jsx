import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function Guide() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
