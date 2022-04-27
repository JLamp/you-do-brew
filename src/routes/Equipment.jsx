import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { getTablespoonsFromWeight } from '../utils';
import Content from '../components/Content';
import { ButtonLink } from '../components/Buttons';
import EquipmentInfo from '../components/EquipmentInfo';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledEquipmentList = styled.ul`
  color: ${({ theme }) => theme.colors.ink01};
  column-count: 2;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const formatCoarseness = (unformattedCoarseness) => {
  switch (unformattedCoarseness) {
    case 'TableSalt':
      return 'Table salt';
    case 'KosherSalt':
      return 'Kosher salt';
    case 'Breadcrumbs':
      return 'Breadcrumbs';
    default:
      return null;
  }
};

const Equipment = () => {
  const method = useOutletContext();

  const Body = (
    <BodyContainer>
      <div>
        <h3>What Else You&apos;ll Need</h3>
        <StyledEquipmentList>
          {method.equipment.map((piece) => (
            <li key={piece}>{piece}</li>
          ))}
        </StyledEquipmentList>
      </div>
      <div>
        <h3>{method.prep.title}</h3>
        <p>{method.prep.instruction}</p>
      </div>
    </BodyContainer>
  );

  const PrepLink = (
    <ButtonLink fullWidth={true} to="../brew">
      Ready to Brew
    </ButtonLink>
  );

  return (
    <Content
      body={Body}
      footer={PrepLink}
      screen={
        <EquipmentInfo
          coarseness={formatCoarseness(method.coarseness)}
          grams={method.weight}
          tablespoons={getTablespoonsFromWeight(method.weight)}
        />
      }
      title="Let's Get Ready"
    />
  );
};

export default Equipment;
