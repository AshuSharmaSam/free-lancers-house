import Link from "next/link";
import Intro from "./intro";
import Solutions from "./solutions";
import Whatwedo from "./whatwedo";
import FooterPage from "../../footer/footer";

export default function AboutPage() {
  return (
    <div>
      <Intro />
      <Solutions />
      <Whatwedo />
      <FooterPage />
    </div>
  );
}
