import React from 'react';
import Slider from 'react-slick';

const Teachers = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <>
           <div id="rs-team" className="rs-team style1 gray-bg pt-94 pb-100 md-pt-64 md-pb-70">
                <div className="container">
                    <div className="sec-title mb-50 md-mb-30">
                    <h2 className="title mb-0">Free Tips Videos</h2>
                    </div>
                    <Slider {...settings} className="rs-carousel owl-carousel nav-style2" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="true" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={2} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="true" data-md-device-dots="false">
                    <div className="team-item">
                        <img src="assets/images/team/1.jpg" alt />
                        <div className="content-part">
                        <h4 className="name"><a href="team-single.html">Jhon Pedrocas</a></h4>
                        <span className="designation">Professor</span>
                        <ul className="social-links">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="team-item">
                        <img src="assets/images/team/2.jpg" alt />
                        <div className="content-part">
                        <h4 className="name"><a href="team-single.html">Jesika Albenian</a></h4>
                        <span className="designation">Professor</span>
                        <ul className="social-links">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="team-item">
                        <img src="assets/images/team/3.jpg" alt />
                        <div className="content-part">
                        <h4 className="name"><a href="team-single.html">Alex Anthony</a></h4>
                        <span className="designation">Professor</span>
                        <ul className="social-links">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item">
                        <img src="assets/images/team/3.jpg" alt />
                        <div className="content-part">
                        <h4 className="name"><a href="team-single.html">Alex Anthony</a></h4>
                        <span className="designation">Professor</span>
                        <ul className="social-links">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item">
                        <img src="assets/images/team/3.jpg" alt />
                        <div className="content-part">
                        <h4 className="name"><a href="team-single.html">Alex Anthony</a></h4>
                        <span className="designation">Professor</span>
                        <ul className="social-links">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-item">
                        <img src="assets/images/team/3.jpg" alt />
                        <div className="content-part">
                        <h4 className="name"><a href="team-single.html">Alex Anthony</a></h4>
                        <span className="designation">Professor</span>
                        <ul className="social-links">
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>

        </>
    )
}

export default Teachers
