import styled from 'styled-components';
import { getCurrentGuide } from '../utils';
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

export default function Equipment() {
  const guide = getCurrentGuide();

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
          coarseness={guide.coarseness}
          grams={guide.weight[0]}
          tablespoons={guide.weight[1]}
        />
      }
      title="Let's Get Ready"
    />
  );
}
