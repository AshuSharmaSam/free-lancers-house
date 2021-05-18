// export default function Banner() {
//   return (
//     <div>
//       <p>This is the about page</p>
//     </div>
//   );
// }

import React, { Component } from "react";
import Slider from "react-slick";
import strings from "../../../static/lang/eng/eng.json";
import Service from "../../common/SeoComponent/services";
import TranslateText from "../../common/translateText";
import Link from "next/link";
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  lazyLoad: true
};
class Banner extends React.Component {
  render() {
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className="sc-slides">
            <div className="sc-content">
              <h1>
              <Service name= {strings.home.services.web.heading} description={strings.home.services.web.content}/>
              <TranslateText
                    text=   {strings.home.services.web.heading}
              />
              </h1>
              <p>
              <Link href="/portfolio" >
                View Portfolio →
              </Link>
                </p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset={strings.home.banner.banner1}
              />
              <source
                media={strings.home.banner.banner1}
              />
              <img src={strings.home.banner.banner1} />
            </picture>
          </div>
          <div className="sc-slides">
            <div className="sc-content">
              <h1>
              <Service name= {strings.home.services.mobile.heading} description={strings.home.services.mobile.content}/>
              <TranslateText
                    text= {strings.home.services.mobile.heading}
                />
              </h1>
              <p>
              <Link href="/contact" >
                Contact →
              </Link>
              </p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset={strings.home.banner.banner2}
              />
              <source
                media="(max-width: 768px)"
                srcset={strings.home.banner.banner1}
              />
              <img src={strings.home.banner.banner1} />
            </picture>
          </div>

          <div className="sc-slides">
            <div className="sc-content">
              <h1>
              <Service name= {strings.home.services.graphics.heading} description={strings.home.services.graphics.content}/>
              <TranslateText
                    text= {strings.home.services.graphics.heading}
              />
              </h1>
              <p>
              <Link href="/portfolio" >
                View Portfolio →
              </Link>
              </p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset={strings.home.banner.banner3}
              />
              <source
                media="(max-width: 768px)"
                srcset={strings.home.banner.banner3}
              />
              <img src={strings.home.banner.banner3} />
            </picture>
          </div>
          <div className="sc-slides">
            <div className="sc-content">
              <h1>
                <Service name= {strings.home.services.devops.heading} description={strings.home.services.devops.content}/>
                    <TranslateText
                    text= {strings.home.services.devops.heading}
                  /></h1>
              <p>
              <Link href="/portfolio" >
                View Portfolio →
              </Link>
              </p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset={strings.home.banner.banner4}
              />
              <source
                media="(max-width: 768px)"
                srcset={strings.home.banner.banner4}
              />
              <img src={strings.home.banner.banner4} />
            </picture>
          </div>
          <div className="sc-slides">
            <div className="sc-content">
              <h1>
              <Service name= {strings.home.services.digital.heading} description={strings.home.services.digital.content}/>
                    <TranslateText
                    text= {strings.home.services.digital.heading}
                  />
              
              </h1>
              <p>
              <Link href="/portfolio" >
                View Portfolio →
              </Link>
              </p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset={strings.home.banner.banner2}
              />
              <source
                media="(max-width: 768px)"
                srcset={strings.home.banner.banner2}
              />
              <img src={strings.home.banner.banner2} />
            </picture>
          </div>
          <div className="sc-slides">
            <div className="sc-content">
              <h1>
              <Service name= {strings.home.services.blockchain.heading} description={strings.home.services.blockchain.content}/>
                    <TranslateText
                    text= {strings.home.services.blockchain.heading}
                  />
              </h1>
              <p>
              <Link href="/portfolio" >
                View Portfolio →
              </Link>
              </p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset="https://unsplash.it/1600/800?image=501"
              />
              <source
                media="(max-width: 768px)"
                srcset="https://unsplash.it/768/400?image=501"
              />
              <img src="https://unsplash.it/768/400?image=501" />
            </picture>
          </div>
          
        </Slider>
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Banner;
