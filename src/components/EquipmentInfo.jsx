import styled from "styled-components";
import { Icon } from "./Icon/Icon";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const CoarsenessIcon = styled(Icon).attrs({
  type: "test",
})`
  color: ${({ theme, active }) =>
    active ? theme.colors.ink : theme.colors.line};
`;

export default function EquipmentInfo({ grams, tablespoons, coarseness }) {
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
          <CoarsenessIcon size="md" active={coarseness === "Table salt"} />
          <CoarsenessIcon size="lg" active={coarseness === "Kosher salt"} />
          <CoarsenessIcon size="xl" active={coarseness === "Breadcrumbs"} />
        </IconContainer>
        <Detail>{coarseness}</Detail>
      </Column>
    </Container>
  );
}
