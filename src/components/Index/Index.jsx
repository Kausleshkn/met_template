import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Index.css";

export default function Index() {

    const CustomArrow = ({ className, style, onClick }) => (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <CustomArrow className="slick-next" />,
        prevArrow: <CustomArrow className="slick-prev" />,
        dotsClass: "custom-shape",
        appendDots: dots => (
            <div className="custom-dots-container">
              <ul className="custom-dots"> {dots} </ul>
            </div>
          ),
        customPaging: i => (
            <div className="custom-dot"></div>
          ),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            },
          },
        ],
    };

    const settings2 = {
        arrows: false,
        dots: true,
        // infinite: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        // autoplaySpeed: 5000,
        // cssEase: "ease",
        // fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    const items = [

        {
            image: "images/slider/dummy.png",
            lazy_image: "images/slider/banner.jpg",
            sm_text: "Find your soul mate on",
            bg_text: "Weds Portal"
        },

        {
            image: "images/slider/dummy.png",
            lazy_image: "images/slider/banner2.jpg",
            sm_text: "Lorem ipsum dolor sit amet",
            bg_text: "Merriage Template"
        },

        {
            image: "images/slider/dummy.png",
            lazy_image: "images/slider/banner3.jpg",
            sm_text: "Lorem ipsum dolor sit amet",
            bg_text: "Online Match Maker"
        }
    ];

    return (
        <>
            {/* Revolution slider start */}
            <div className="tp-banner-container" id="slider">
                <div className="tp-banner" >
                    <ul style={{position:"relative"}}>

                        <Slider {...settings}>
                            {items.length > 0 && items.map((slide, index) => (

                                <li key={index} data-slotamount="7" data-transition="slotzoom-horizontal" data-masterspeed="1000" data-saveperformance="on">

                                    <img alt="" src={slide.lazy_image} data-lazyload={slide.image} />

                                    <div style={{position:"absolute",top:"20px",}}>
                                        <div className="caption lfb large-title tp-resizeme slidertext2" data-x="center" data-y="200" data-speed="600" data-start="1000">{slide.sm_text}</div>

                                        <div className="caption lfb large-title tp-resizeme slidertext1" data-x="center" data-y="230" data-speed="600" data-start="1600">{slide.bg_text}</div>
                                    </div>
                                </li>
                            ))}
                        </Slider>
                        {/* <li data-slotamount="7" data-transition="slotzoom-horizontal" data-masterspeed="1000" data-saveperformance="on"> <img alt="" src="images/slider/dummy.png" data-lazyload="images/slider/banner.jpg" />
                            <div className="caption lfb large-title tp-resizeme slidertext2" data-x="center" data-y="200" data-speed="600" data-start="1000">Find your soul mate on</div>
                            <div className="caption lfb large-title tp-resizeme slidertext1" data-x="center" data-y="230" data-speed="600" data-start="1600"> Weds Portal</div>
                        </li> */}

                        {/* <li data-slotamount="7" data-transition="slotzoom-horizontal" data-masterspeed="1000" data-saveperformance="on"> <img alt="" src="images/slider/dummy.png" data-lazyload="images/slider/banner2.jpg" />
                            <div className="caption lfb large-title tp-resizeme slidertext2" data-x="center" data-y="200" data-speed="600" data-start="1000">Lorem ipsum dolor sit amet</div>
                            <div className="caption lfb large-title tp-resizeme slidertext1" data-x="center" data-y="230" data-speed="600" data-start="1600">Merriage Template</div>
                        </li> */}

                        {/* <li data-slotamount="7" data-transition="slotzoom-horizontal" data-masterspeed="1000" data-saveperformance="on"> <img alt="" src="images/slider/dummy.png" data-lazyload="images/slider/banner3.jpg" />
                            <div className="caption lfb large-title tp-resizeme slidertext2" data-x="center" data-y="200" data-speed="600" data-start="1000">Lorem ipsum dolor sit amet</div>
                            <div className="caption lfb large-title tp-resizeme slidertext1" data-x="center" data-y="230" data-speed="600" data-start="1600">Online Match Maker</div>
                        </li> */}

                    </ul>
                </div>
            </div>

            {/* Slider Start */}

            <div className="slider-wrap search2">
                <div className="container">
                    <div className="topsearchform">
                        <div className="searhint">
                            <div className="searchbox">
                                <div className="row">
                                    <div className="col-lg-2 col-md-4">
                                        <div className="srchfld">
                                            <label htmlFor="">I'm looking for</label>
                                            <select name="" id="" className="form-control">
                                                <option value="">Bride (Female)</option>
                                                <option value="">Groom (Male)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4">
                                        <div className="srchfld">
                                            <label htmlFor="">Age From</label>
                                            <input type="number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4">
                                        <div className="srchfld">
                                            <label htmlFor="">Age To</label>
                                            <input type="number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4">
                                        <div className="srchfld">
                                            <label htmlFor="">Metrial Status</label>
                                            <select name="" className="form-control">
                                                <option value="">Choose one</option>
                                                <option value="1">Never Married</option>
                                                <option value="2">Married</option>
                                                <option value="3">Divorced </option>
                                                <option value="4">Separated </option>
                                                <option value="5">Widowed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4">
                                        <div className="srchfld">
                                            <label htmlFor="">Religion</label>
                                            <select name="" className="form-control">
                                                <option value="">Choose one</option>
                                                <option value="1">Never Married</option>
                                                <option value="2">Married</option>
                                                <option value="3">Divorced </option>
                                                <option value="4">Separated </option>
                                                <option value="5">Widowed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4">
                                        <div className="srchfld">
                                            <label htmlFor="">&nbsp;</label>
                                            <button type="submit" className="btn"><i className="fas fa-search"></i> Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Profile */}

            <div className="feature-wrap">
                <div className="container">
                    <div className="title">
                        <h1>Featured <span>Profiles</span></h1>
                        <div className="bar"></div>
                    </div>

                    <Slider className="featuredusers " {...settings2}>

                        <div className="item">
                            <div className="profileWrp">
                                <div className="ribbon_3 popular"><span>Featured</span></div>
                                <div className="profileImg"><img src="images/users/01.jpg" alt="" /></div>
                                <div className="profile-detail">
                                    <div className="name">Arsala</div>
                                    <ul>
                                        <li><span>Age</span>: 25 Years</li>
                                        <li><span>Status</span>: Never Married</li>
                                        <li><i className="fas fa-map-marker-alt"></i> Karachi, Pakistan</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="profileWrp">
                                <div className="ribbon_3 popular"><span>Featured</span></div>
                                <div className="profileImg"><img src="images/users/12.jpg" alt="" /></div>
                                <div className="profile-detail">
                                    <div className="name">Jhon</div>
                                    <ul>
                                        <li><span>Age</span>: 25 Years</li>
                                        <li><span>Status</span>: Never Married</li>
                                        <li><i className="fas fa-map-marker-alt"></i> Karachi, Pakistan</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="profileWrp">
                                <div className="ribbon_3 popular"><span>Featured</span></div>
                                <div className="profileImg"><img src="images/users/03.jpg" alt="" /></div>
                                <div className="profile-detail">
                                    <div className="name">Azeema</div>
                                    <ul>
                                        <li><span>Age</span>: 25 Years</li>
                                        <li><span>Status</span>: Never Married</li>
                                        <li><i className="fas fa-map-marker-alt"></i> Karachi, Pakistan</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="profileWrp">
                                <div className="ribbon_3 popular"><span>Featured</span></div>
                                <div className="profileImg"><img src="images/users/04.jpg" alt="" /></div>
                                <div className="profile-detail">
                                    <div className="name">Maham Malik</div>
                                    <ul>
                                        <li><span>Age</span>: 25 Years</li>
                                        <li><span>Status</span>: Never Married</li>
                                        <li><i className="fas fa-map-marker-alt"></i> Karachi, Pakistan</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="profileWrp">
                                <div className="ribbon_3 popular"><span>Featured</span></div>
                                <div className="profileImg"><img src="images/users/05.jpg" alt="" /></div>
                                <div className="profile-detail">
                                    <div className="name">Maham Malik</div>
                                    <ul>
                                        <li><span>Age</span>: 25 Years</li>
                                        <li><span>Status</span>: Never Married</li>
                                        <li><i className="fas fa-map-marker-alt"></i> Karachi, Pakistan</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </div>
                    </Slider>

                    <div className="view-all"><a href="#">View All Profiles <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
                </div>
            </div>

            {/* How it works Start */}

            <div className="process-area ptb-100">
                <div className="container">
                    <div className="title">
                        <h1>See How It<span> Works</span></h1>
                        <div className="bar"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-process-box">
                                <div className="icon"><i className="fas fa-user-alt"></i></div>
                                <div className="content">
                                    <h3 >Create Account</h3>
                                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    <div className="number">1</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-process-box">
                                <div className="icon"><i className="fas fa-search"></i></div>
                                <div className="content">
                                    <h3 >Search Your Soul Mate</h3>
                                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    <div className="number">2</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-process-box">
                                <div className="icon"><i className="fas fa-mars-double"></i></div>
                                <div className="content">
                                    <h3 >Get Married</h3>
                                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    <div className="number">3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            {/* -Latest Brides Start */}

            <div className="bride-wrap">
                <div className="container">
                    <div className="title">
                        <h1>Latest<span> Brides</span></h1>
                        <div className="bar"></div>
                    </div>
                    <ul className="row">
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/06.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Amna</div>
                                    <ul>
                                        <li>Female</li>
                                        <li>25 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/07.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Fatyma</div>
                                    <ul>
                                        <li>Female</li>
                                        <li>25 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/08.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Arsala</div>
                                    <ul>
                                        <li>Female</li>
                                        <li>25 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/09.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Azeema</div>
                                    <ul>
                                        <li>Female</li>
                                        <li>25 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/10.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Maham Malik</div>
                                    <ul>
                                        <li>Female</li>
                                        <li>25 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/01.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Sehar</div>
                                    <ul>
                                        <li>Female</li>
                                        <li>25 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Video Start */}

            <div className="video-area video-area-bg">
                <div className="container">
                    <div className="video-content video-ptb">
                        <h2>Are You Ready To Start Your Journey?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies iaculis augue, vitae volutpat massa vulputate nec. Sed tincidunt fermentum diam, vitae porttitor eros egestas porta.</p>

                        <a href="#"
                            className="reg"
                            style={{ display: "inline-block", backgroundColor: "pink", padding: "10px 20px", marginTop: "20px", textDecoration: "none" }}
                        >
                            <i className="far fa-user" style={{ marginRight: "10px" }}></i>
                            Sign up
                        </a>

                        {/* <a href="#" className="play-btn"><i className="far fa-user"></i> Sign UP</a> */}

                    </div>
                </div>
            </div>

            {/* Latest Grooms Start */}

            <div className="bride-wrap groomsWrp">
                <div className="container">
                    <div className="title">
                        <h1>Latest<span> Grooms</span></h1>
                        <div className="bar"></div>
                    </div>
                    <ul className="row">
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/11.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Nowaz Khan</div>
                                    <ul>
                                        <li>Male</li>
                                        <li>28 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/12.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Shoaib ahmed</div>
                                    <ul>
                                        <li>Male</li>
                                        <li>28 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/13.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Hassan ALi</div>
                                    <ul>
                                        <li>Male</li>
                                        <li>28 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/14.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Ahsan Khan</div>
                                    <ul>
                                        <li>Male</li>
                                        <li>28 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/15.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">Michel</div>
                                    <ul>
                                        <li>Male</li>
                                        <li>28 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-4 col-md-6">
                            <div className="brideList">
                                <div className="brideImg"><img src="images/users/16.jpg" alt="" /></div>
                                <div className="profileInfo">
                                    <div className="name">James</div>
                                    <ul>
                                        <li>Male</li>
                                        <li>28 Years</li>
                                        <li>Never Married</li>
                                        <li>New York, USA</li>
                                    </ul>
                                    <div className="viewbtn"><a href="#">View Profile</a></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Get Started- */}

            <div className="getstart-wrap">
                <div className="container">
                    <div className="get-start">
                        <h3>Apply for an account in minutes</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
                        <a href="#">Get Started <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
                </div>
            </div>

            {/* About Us Start */}

            <div className="aboutSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_box">
                                <div className="title">
                                    <p>About Us</p>
                                    <h1>Weds Portl <span>fusce ut ante urna.</span></h1>
                                    <div className="bar"></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur, pulvinar rhoncus risus. Fusce vel rutrum mi. Suspendisse pretium tellus eu ipsum pellentesque convallis. Ut mollis libero eu massa imperdiet faucibus vitae non diam. Sed egestas felis libero, ut suscipit nisl varius non. Proin eget suscipit nulla. Nulla facilisi. In hac habitasse platea dictumst.</p>
                                <ul className="tick">
                                    <li>Sed egestas urna eget ipsum condimentum</li>
                                    <li>Maecenas lacinia blandit ligula, at tristique mi sagittis sit</li>
                                    <li>Vivamus dapibus massa non orci tincidunt</li>
                                </ul>
                                <div className="readmore"><a href="#">Read More</a></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aboutImg"><img src="images/about-us.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Start */}

            {/* <div className="testimonials-wrap">
                <div className="container">
                    <div className="title">
                        <h1>What people are saying.</h1>
                        <div className="bar"></div>
                    </div>
                    <ul className="owl-carousel testimonials_list">
                        <li className="item">
                            <div className="testimonials_sec">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, urna eu scelerisque maximus, urna nibh semper lectus, ut interdum nunc ligula et magna. In ac mauris vehicula, vulputate sem at, placerat nisl. Etiam laoreet erat magna, at hendrerit lorem vulputate non. Nam facilisis congue convallis.</p>
                            </div>
                            <div className="client_sec">
                                <div className="clientImg"><img alt="" src="images/client1.jpg" /></div>
                                <h3>Wanda Bates</h3>
                                <div className="desi">client - Islamabad</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="testimonials_sec">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, urna eu scelerisque maximus, urna nibh semper lectus, ut interdum nunc ligula et magna. In ac mauris vehicula, vulputate sem at, placerat nisl. Etiam laoreet erat magna, at hendrerit lorem vulputate non. Nam facilisis congue convallis.</p>
                            </div>
                            <div className="client_sec">
                                <div className="clientImg"><img alt="" src="images/client1.jpg" /></div>
                                <h3>Wanda Bates</h3>
                                <div className="desi">client - Islamabad</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="testimonials_sec">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, urna eu scelerisque maximus, urna nibh semper lectus, ut interdum nunc ligula et magna. In ac mauris vehicula, vulputate sem at, placerat nisl. Etiam laoreet erat magna, at hendrerit lorem vulputate non. Nam facilisis congue convallis.</p>
                            </div>
                            <div className="client_sec">
                                <div className="clientImg"><img alt="" src="images/client1.jpg" /></div>
                                <h3>Wanda Bates</h3>
                                <div className="desi">client - Islamabad</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="testimonials_sec">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, urna eu scelerisque maximus, urna nibh semper lectus, ut interdum nunc ligula et magna. In ac mauris vehicula, vulputate sem at, placerat nisl. Etiam laoreet erat magna, at hendrerit lorem vulputate non. Nam facilisis congue convallis.</p>
                            </div>
                            <div className="client_sec">
                                <div className="clientImg"><img alt="" src="images/client1.jpg" /></div>
                                <h3>Wanda Bates</h3>
                                <div className="desi">client - Islamabad</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}

            {/* Counter Section */}

            <div id="counter" className="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-6 counter-item">
                            <div className="counter-icon"><i className="fas fa-female"></i></div>
                            <span className="counter-number" data-from="1" data-to="5987" data-speed="1000"></span> <span className="counter-text">Bridals</span> </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 counter-item">
                            <div className="counter-icon"><i className="fas fa-male"></i></div>
                            <span className="counter-number" data-from="1" data-to="3254" data-speed="2000"></span> <span className="counter-text">Grooms</span> </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 counter-item">
                            <div className="counter-icon"><i className="fa fa-laptop"></i></div>
                            <span className="counter-number" data-from="1" data-to="1999" data-speed="3000"></span> <span className="counter-text">Project Finished</span> </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 counter-item">
                            <div className="counter-icon"><i className="fas fa-venus-double"></i></div>
                            <span className="counter-number" data-from="1" data-to="199" data-speed="4000"></span> <span className="counter-text">Success Stories</span> </div>
                    </div>
                </div>
            </div>

            {/* Blog Start */}

            {/* <div className="hblogwrap">
                <div className="container">
                    <div className="title">
                        <h1>Latest From Blog</h1>
                        <div className="bar"></div>
                    </div>
                    <ul className="row homeblog">
                        <li className="col-lg-4">
                            <div className="blog_box">
                                <div className="blogImg"><img alt="" src="images/blog-1.jpg" />
                                    <div className="blog_date">Sep 17, 2020</div>
                                </div>
                                <div className="blog_sec">
                                    <h3><a href="#">Praesent consequat justo ut sollicitudin molestie.</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis justo, pulvinar non dui tincidunt, tristique faucibus velit.</p>
                                    <a href="#" className="readmore">Read More <i className="fas fa-long-arrow-alt-right"></i></a> </div>
                            </div>
                        </li>
                        <li className="col-lg-4">
                            <div className="blog_box">
                                <div className="blogImg"><img alt="" src="images/blog-2.jpg" />
                                    <div className="blog_date">Sep 17, 2020</div>
                                </div>
                                <div className="blog_sec">
                                    <h3><a href="#">Praesent consequat justo ut sollicitudin molestie.</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis justo, pulvinar non dui tincidunt, tristique faucibus velit.</p>
                                    <a href="#" className="readmore">Read More <i className="fas fa-long-arrow-alt-right"></i></a> </div>
                            </div>
                        </li>
                        <li className="col-lg-4">
                            <div className="blog_box">
                                <div className="blogImg"><img alt="" src="images/blog-3.jpg" />
                                    <div className="blog_date">Sep 17, 2020</div>
                                </div>
                                <div className="blog_sec">
                                    <h3><a href="#">Praesent consequat justo ut sollicitudin molestie.</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis justo, pulvinar non dui tincidunt, tristique faucibus velit.</p>
                                    <a href="#" className="readmore">Read More <i className="fas fa-long-arrow-alt-right"></i></a> </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}
        </>
    )
}
