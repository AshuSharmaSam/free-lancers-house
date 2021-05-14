import PortfolioPage from "../layout/component/portfolio";
import HeaderComponent from "../layout/header/header";
import PageBanner from "../layout/common/page-banner";

export default function Portfolio() {
  return (
    <div>
      <HeaderComponent />
      <PageBanner
        heading={"Portfolio"}
        subHeading={"We are a team of highly skilled professionals"}
        bannerImage={"https://unsplash.it/1600/800?image=525"}
      />
      <PortfolioPage />
    </div>
  );
}
