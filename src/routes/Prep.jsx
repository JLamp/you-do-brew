import { useParams, Link } from "react-router-dom";
import { getGuide } from "../data";
import Content from "../components/Content";
import { ButtonLink } from "../components/Buttons";

export default function Guide() {
  let params = useParams();
  let guide = getGuide(params.guideSlug);
  let prep = guide.prep;

  return (
    <Content
      title={prep[0][0]}
      body={prep[0][1]}
      footer={<ButtonLink to="../brew">Ready to brew</ButtonLink>}
    />
  );
}
