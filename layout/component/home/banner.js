// export default function Banner() {
//   return (
//     <div>
//       <p>This is the about page</p>
//     </div>
//   );
// }

import React, { Component } from "react";
import Slider from "react-slick";

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
              <h1>WEBSITE DEVELOPMENT</h1>
              <p>View Portfolio →</p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset="https://unsplash.it/1600/800?image=507"
              />
              <source
                media="(max-width: 768px)"
                srcset="https://unsplash.it/768/400?image=507"
              />
              <img src="https://unsplash.it/768/400?image=507" />
            </picture>
          </div>
          <div className="sc-slides">
            <div className="sc-content">
              <h1>MOBILE APP DEVELOPMENT</h1>
              <p>Contact us →</p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset="https://unsplash.it/1600/800?image=502"
              />
              <source
                media="(max-width: 768px)"
                srcset="https://unsplash.it/768/400?image=502"
              />
              <img src="https://unsplash.it/768/400?image=502" />
            </picture>
          </div>

          <div className="sc-slides">
            <div className="sc-content">
              <h1>GRAPHICS DESIGNING</h1>
              <p>View Portfolio →</p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset="https://unsplash.it/1600/800?image=504"
              />
              <source
                media="(max-width: 768px)"
                srcset="https://unsplash.it/768/400?image=504"
              />
              <img src="https://unsplash.it/768/400?image=504" />
            </picture>
          </div>
          <div className="sc-slides">
            <div className="sc-content">
              <h1>DEVOPS</h1>
              <p>View Portfolio →</p>
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
          <div className="sc-slides">
            <div className="sc-content">
              <h1>DIGITAL MARKETING</h1>
              <p>View Portfolio →</p>
            </div>
            <picture>
              <source
                media="(min-width: 767px)"
                srcset="https://unsplash.it/1600/800?image=504"
              />
              <source
                media="(max-width: 768px)"
                srcset="https://unsplash.it/768/400?image=504"
              />
              <img src="https://unsplash.it/768/400?image=504" />
            </picture>
          </div>
          <div className="sc-slides">
            <div className="sc-content">
              <h1>BLOCKCHAIN</h1>
              <p>View Portfolio →</p>
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
