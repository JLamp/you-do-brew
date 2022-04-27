import styled from 'styled-components';
import { Icon } from './Icon/Icon';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Header = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Detail = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const IconContainer = styled.div`
  align-items: baseline;
  display: flex;
  gap: 8px;
`;

const CoarsenessIcon = styled(Icon).attrs({
  type: 'test',
})`
  color: ${({ theme, active }) => (active ? theme.colors.ink : theme.colors.line)};
`;

const EquipmentInfo = ({ grams, tablespoons, coarseness }) => {
  return (
    <Container>
      <Column>
        <Header>Coffee</Header>
        <h2>{grams}g</h2>
        <Detail>{tablespoons} tablespoons</Detail>
      </Column>
      <Column>
        <Header>Coarseness</Header>
        <IconContainer>
          <CoarsenessIcon active={coarseness === 'Table salt'} size="md" />
          <CoarsenessIcon active={coarseness === 'Kosher salt'} size="lg" />
          <CoarsenessIcon active={coarseness === 'Breadcrumbs'} size="xl" />
        </IconContainer>
        <Detail>{coarseness}</Detail>
      </Column>
    </Container>
  );
};

export default EquipmentInfo;
