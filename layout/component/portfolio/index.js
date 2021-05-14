import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Icon } from "antd";
import PortfolioGallary from "./portfolio-gallary";
import Contact from "../../../layout/component/home/contact";
import FooterPage from "../../footer/footer";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioGallary />
      <Contact />
      <FooterPage />
    </>
  );
}
