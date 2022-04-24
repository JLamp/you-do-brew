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
  align-items: center;
  gap: 4px;
`;

const Overline = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const ColumnContent = styled.h2`
  text-align: center;
`;

const Detail = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-weight: 800;
  font-size: 14px;
`;

export default function Equipment() {
  let guide = getCurrentGuide();

  const CoffeeInfo = (
    <Container>
      <Column>
        <Overline>Coffee</Overline>
        <ColumnContent>{guide.weight[0]}g</ColumnContent>
        <Detail>{guide.weight[1]} tablespoons</Detail>
      </Column>
      <Column>
        <Overline>Coarseness</Overline>
        <ColumnContent>
          <img src="/coarseness/kosher-salt.svg" />
        </ColumnContent>
        <Detail>{guide.coarseness}</Detail>
      </Column>
    </Container>
  );

  const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  const StyledEquipmentList = styled.ul`
    column-count: 2;
    list-style-type: none;
    padding: 0;
    margin: 0;
  `;

  const Body = (
    <BodyContainer>
      <div>
        <h3>What Else You'll Need</h3>
        <StyledEquipmentList>
          {guide.equipment.map((piece) => (
            <li key={piece}>{piece}</li>
          ))}
        </StyledEquipmentList>
      </div>
      <div>
        <h3>{guide.prep.title}</h3>
        <p>{guide.prep.instruction}</p>
      </div>
    </BodyContainer>
  );

  const PrepLink = (
    <ButtonLink to="../brew" fullWidth>
      Ready to Brew
    </ButtonLink>
  );

  return (
    <Content
      title="Let's Get Ready"
      screen={CoffeeInfo}
      body={Body}
      footer={PrepLink}
    />
  );
}
