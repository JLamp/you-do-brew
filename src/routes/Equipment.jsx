import { getCurrentGuide } from "../utils";
import Content from "../components/Content";
import styled from "styled-components";
import { ButtonLink } from "../components/Buttons";
import EquipmentInfo from "../components/EquipmentInfo";

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

export default function Equipment() {
  let guide = getCurrentGuide();

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
      screen={
        <EquipmentInfo
          grams={guide.weight[0]}
          tablespoons={guide.weight[1]}
          coarseness={guide.coarseness}
        />
      }
      body={Body}
      footer={PrepLink}
    />
  );
}
