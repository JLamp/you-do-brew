import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Guide = () => {
  const currentSlug = useParams().guideSlug;
  const methods = useOutletContext();
  const method = methods.find((m) => m.slug === currentSlug);

  return (
    <>
      <NavBar currentMethod={method} />
      <Outlet context={method} />
    </>
  );
};
export default Guide;
