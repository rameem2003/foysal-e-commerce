import React, { useEffect, useState } from "react";
import Container from "../components/common/Container";
import BreadCrums from "./../components/common/BreadCrums";
import axios from "axios";
import Flex from "../components/common/Flex";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "../components/common/Image";

const NewsPage = () => {
  // state for store the news
  const [news, setNews] = useState([]);

  // function for fetch the news
  const fetchNews = async () => {
    const res = await axios.get("https://smcorpapi.vercel.app/api/news");
    setNews(res.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="my-10">
      <Container>
        <BreadCrums location="News & Updates" />

        {news.length == 0 && (
          <Flex className="gap-5 flex-wrap lg:flex-nowrap">
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[25%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[25%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[25%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[25%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
          </Flex>
        )}
        <Flex className="my-10 items-center gap-5 flex-wrap">
          {news
            .sort((a, b) => b.timeStamp - a.timeStamp)
            .map((data, i) => (
              <div
                className=" w-full md:w-[45%] lg:w-[30%] xl:w-[25%] p-2 border-[2px] border-black relative"
                key={i}
              >
                <Image
                  className="h-[200px] w-full object-cover"
                  src={data.thumbnail}
                />
                <div>
                  <h2 className=" font-bold text-3xl">{data.title}</h2>
                  <p className=" font-medium text-lg text-gray-500">
                    {data.details}
                  </p>
                </div>
              </div>
            ))}
        </Flex>
      </Container>
    </main>
  );
};

export default NewsPage;
