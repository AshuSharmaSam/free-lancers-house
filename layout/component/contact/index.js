import Link from "next/link";
import FooterPage from "../../footer/footer";
import Contactform from "./contactform";
import ContactMsg from "./contactmsg";

export default function ContactPage() {
  return (
    <div>
      <ContactMsg />
      <Contactform />
      <FooterPage />
    </div>
  );
}
