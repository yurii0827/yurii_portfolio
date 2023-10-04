import React from "react";

//import stock
import stock from "../img/Screenshot_4.png";
import stock1 from "../img/Screenshot_5.png";
import stock2 from "../img/Screenshot_6.png";
import stock3 from "../img/Screenshot_7.png";
import stock4 from "../img/Screenshot_8.png";
import stock5 from "../img/Screenshot_9.png";
import stock6 from "../img/Screenshot_10.png";
import stock7 from "../img/Screenshot_11.png";
import stock8 from "../img/Screenshot_12.png";
import stock9 from "../img/Screenshot_13.png";
import stock10 from "../img/Screenshot_14.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Some of my works
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-md-4">
              <div className="work-box">
                <a href={stock2} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">React Ecommerce Platform</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS Redux Typescirpt Tailwind CSS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

                <a
                  href={stock}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock8} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock8} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Sport Eshop management</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Laravel MySQL Vue Bootstrap</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock6}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock7}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock9} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock9} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Chat app(app, website)</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            React Electron ChatGPT Firebase
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock10}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
