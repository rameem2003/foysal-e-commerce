import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import ItemCardProtrait from "../../common/ItemCardProtrait";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Title from "../../common/Title";

const ProductsSection = () => {
  // get all products from the redux
  const productsData = useSelector((state) => state.allProducts.products);
  const products = productsData;
  return (
    <section className="my-10">
      <Container>
        <Title title="Our Collections" />

        {products.length == 0 && (
          <Flex className="flex-wrap gap-5 lg:flex-nowrap">
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
          </Flex>
        )}

        <Flex className="mt-5 flex-wrap items-center justify-between gap-[12px]">
          {products.slice(0, 12).map((data, i) => (
            <ItemCardProtrait
              data={data}
              key={i}
              className="w-full sm:w-[49%] md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]"
            />
          ))}
        </Flex>

        <div className="text-center">
          <Link
            to="/shop"
            className="mx-auto my-10 inline-flex items-center justify-center gap-2 rounded-md border-[2px] border-primary p-2 text-lg font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-white"
          >
            View More
            <FaArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;
