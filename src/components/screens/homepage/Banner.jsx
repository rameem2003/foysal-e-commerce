import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../common/Container";
import Slider from "react-slick";
import Flex from "./../../common/Flex";
import Image from "../../common/Image";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import dummyBanner from "../../../assets/banner.png";
import dummyBanner1 from "../../../assets/banner1.jpg";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [slide, setSlide] = useState(0);
  const [allBanners, setAllBanners] = useState([]);
  const [bannerData, setBannerData] = useState({});
  const [news, setNews] = useState([]); // state for store the news
  const array = news.sort((a, b) => b.timeStamp - a.timeStamp);

  // slider settings
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          transform: "translateY(-50px)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === slide
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                backgroundColor: "black",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                backgroundColor: "gray",
              }
        }
      >
        {/* {i + 1} */}
      </div>
    ),

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  // function for fetch the news
  const fetchNews = async () => {
    const res = await axios.get("https://smcorpapi.vercel.app/api/news");
    setNews(res.data);
  };

  // function for fetch the banner
  const fetchData = async () => {
    const res = await axios.get("https://smcorpapi.vercel.app/api/banner");
    setAllBanners(res.data);
    setBannerData(res.data[res.data.length - 1]);
  };

  // useEffect(() => {
  //   fetchData();
  //   fetchNews();
  // }, []);

  return (
    <section className="p-2">
      <Container>
        <Flex className="flex-col justify-between gap-2 xl:flex-row">
          <div className="w-full xl:w-9/12">
            {/* {allBanners.length == 0 && (
            <div className="w-full">
              <Skeleton height={350} />
            </div>
          )} */}
            <Slider {...settings}>
              {/* {bannerData?.banners?.map((data, i) => (
              <Image
                className="w-full h-[255px] xl:h-[380px] object-cover"
                src={data.url}
                alt="banner"
                key={i}
              />
            ))} */}

              <Image
                className="h-[300px] w-full rounded-xl lg:h-[550px] lg:object-cover"
                src={dummyBanner1}
                alt="banner"
              />
              <Image
                className="h-[300px] w-full rounded-xl lg:h-[550px] lg:object-cover"
                src={dummyBanner1}
                alt="banner"
              />
              <Image
                className="h-[300px] w-full rounded-xl lg:h-[550px] lg:object-cover"
                src={dummyBanner1}
                alt="banner"
              />
            </Slider>
          </div>
          <div className="w-full xl:w-3/12">
            <div className="flex h-full flex-col items-center justify-between gap-3 md:flex-row xl:flex-col">
              <div className="h-[50%] w-full overflow-hidden rounded-xl">
                <Image
                  src={dummyBanner1}
                  className="h-full w-full rounded-xl object-cover duration-300 ease-in-out hover:scale-[1.2]"
                />
              </div>
              <div className="h-[50%] w-full overflow-hidden rounded-xl">
                <Image
                  src={dummyBanner1}
                  className="h-full w-full rounded-xl object-cover duration-300 ease-in-out hover:scale-[1.2]"
                />
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
