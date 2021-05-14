import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import Link from "next/link";
export default function slickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true
  };
  return (
    <>
      <Slider {...settings}>
        <div className="portfolio-image">
          <Link href="https://www.peymynt.com/">
              <img src="/static/images/banner/sc11.png" />
          </Link>
        </div>
        <div className="portfolio-image">
          <Link href="https://www.cuddlynest.com/">
              <img src="/static/images/banner/sc2.png" />
          </Link>
        </div>
        <div className="portfolio-image">
        <Link href="https://trym-dev.firebaseapp.com/">
                  <img src="/static/images/banner/sc7.png" />
                </Link>
        </div>
        <div className="portfolio-image">
        <Link href="https://www.theautopartsshop.com/">
                  <img src="/static/images/banner/sc5.png"  />
                </Link>
        </div>
        <div className="portfolio-image">
        <Link href="https://www.localize.city/">
                  <img src="/static/images/banner/sc31.png" />
                 </Link>
        </div>
        <div className="portfolio-image">
        <Link href="https://stylemepretty.com/">
                  <img src="/static/images/banner/sc6.png" />
                </Link>
        </div>
      </Slider>
      <style jsx>{``}</style>
    </>
  );
}
