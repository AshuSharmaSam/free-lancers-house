import AboutPage from "../layout/component/about";
import HeaderComponent from "../layout/header/header";
import PageBanner from "../layout/common/page-banner";

export default function About() {
  return (
    <div>
      <HeaderComponent />
      <PageBanner
        heading={"About"}
        subHeading={"We are a team of highly skilled professionals"}
        bannerImage={"https://unsplash.it/1600/800?image=575"}
      />
      <AboutPage />
    </div>
  );
}
