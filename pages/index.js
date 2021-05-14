import * as React from "react";
import HeaderComponent from "../layout/header/header";
import Banner from "../layout/component/home/banner";
import Services from "../layout/component/home/services";
import Featured from "../layout/component/home/featured";
import Testimonials from "../layout/component/home/testimonials";
import Contact from "../layout/component/home/contact";
import FooterPage from "../layout/footer/footer";

export default class App extends React.Component {
  render() {

    return (
      <div>
        <HeaderComponent />
        <Banner />
        <Services />
        <Featured />
        <Testimonials />
        <Contact />
        <FooterPage />
      </div>
    );
  }
}
