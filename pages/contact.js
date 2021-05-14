import ContactPage from "../layout/component/contact";
import HeaderComponent from "../layout/header/header";
import PageBanner from "../layout/common/page-banner";

export default function Contact() {
  return (
    <div>
      <HeaderComponent />
      <PageBanner
        heading={"CONTACT US"}
        subHeading={"GOT A QUESTION OR CONCERN? LET'S GET IN TOUCH."}
        bannerImage={"https://unsplash.it/1600/800?image=555"}
      />
      <ContactPage />
    </div>
  );
}
