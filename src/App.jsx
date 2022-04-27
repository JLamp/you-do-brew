import styled from 'styled-components';
import { Outlet, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gql, request } from 'graphql-request';
import Home from './routes/Home';
import Guide from './routes/Guide';
import Equipment from './routes/Equipment';
import Brew from './routes/Brew';

const StyledLayout = styled.div`
  background: ${({ theme }) => theme.colors.paper};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  max-height: 844px;
  max-width: 390px;
  overflow: hidden;
  padding: 16px 24px 24px 24px;
  width: 100%;
  & > * {
    width: 100%;
  }
`;

const Layout = ({ methods }) => (
  <StyledLayout>{!methods ? <span>loading</span> : <Outlet context={methods} />}</StyledLayout>
);

const App = () => {
  const [methods, setMethods] = useState(null);

  useEffect(() => {
    const query = gql`
      {
        methods {
          coarseness
          equipment
          prep {
            title
            instruction
          }
          slug
          title
          totalTime
          weight
          instructionList {
            ... on ComplexInstruction {
              instruction
              pourDuration
              targetWeight
              time
              title
              id
            }
            ... on SimpleInstruction {
              instruction
              time
              title
              id
            }
          }
        }
      }
    `;
    const fetchMethods = async () => {
      const fetchedMethods = await request(
        'https://api-us-east-1.graphcms.com/v2/cl2f5a9qd0r2l01xmdo8ncy7p/master',
        query,
      );

      const sortedMethods = fetchedMethods.methods.sort((a, b) => a.title.localeCompare(b.title));
      setMethods(sortedMethods);
    };
    fetchMethods();
  }, []);
  return (
    <Routes>
      <Route element={<Layout methods={methods} />} path="/">
        <Route element={<Home />} index={true} />
        <Route element={<Guide />} path=":guideSlug">
          <Route element={<Equipment />} index={true} />
          <Route element={<Brew />} path="brew" />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
