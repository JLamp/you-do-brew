import { Link } from "react-router-dom";
import { getGuides } from "../data";

export default function Home() {
  let guides = getGuides();
  return (
    <ul>
      {guides.map((guide) => (
        <Link
          style={{ display: "Block", margin: "1rem 0" }}
          to={guide.slug}
          key={guide.slug}
        >
          {guide.method}
        </Link>
      ))}
    </ul>
  );
}
