import { Outlet, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function Guide() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
