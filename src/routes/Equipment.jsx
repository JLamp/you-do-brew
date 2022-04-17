import { getCurrentGuide } from "../utils";
import Content from "../components/Content";
import styled from "styled-components";
import { ButtonLink } from "../components/Buttons";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

const Header = styled.span``;

const ColumnContent = styled.h1``;

const Detail = styled.span``;

export default function Equipment() {
  let guide = getCurrentGuide();

  const CoffeeInfo = (
    <Container>
      <Column>
        <Header>Weight</Header>
        <ColumnContent>{guide.weight[0]}g</ColumnContent>
        <Detail>{guide.weight[1]} tablespoons</Detail>
      </Column>
      <Column>
        <Header>Coarseness</Header>
        <ColumnContent>{guide.weight[0]}g</ColumnContent>
        <Detail>{guide.coarseness}</Detail>
      </Column>
    </Container>
  );

  const EquipmentList = (
    <ul>
      {guide.equipment.map((piece) => (
        <li key={piece}>{piece}</li>
      ))}
    </ul>
  );

  const PrepLink = <ButtonLink to="prep">Prep</ButtonLink>;

  return (
    <Content
      title={guide.method}
      screen={CoffeeInfo}
      body={EquipmentList}
      footer={PrepLink}
    />
  );
}
