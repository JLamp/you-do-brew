import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { getCurrentGuide } from "../utils";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-top: -12px;
  padding-bottom: 12px;
`;

export default function Guide() {
  let guide = getCurrentGuide();
  return (
    <>
      <NavContainer>
        <Link to="/">{guide.method}</Link>
        <span>Brews</span>
      </NavContainer>
      <Outlet />
    </>
  );
}
