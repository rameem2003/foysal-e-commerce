import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import CategoryBox from "../../common/CategoryBox";

const ShopCategories = () => {
  return (
    <section className="my-10">
      <Container>
        <div className="text-center">
          <h2 className="relative z-[10] mx-auto inline-block bg-pageOffWhite px-5 text-center text-3xl font-semibold text-black">
            Let's Explore Our Categories
          </h2>

          <p className="mt-5 text-center text-lg font-medium text-black">
            Chose Your Desired Product from Popular Categories!
          </p>

          <div className="relative left-0 top-[-65px] h-[1px] w-full bg-gray-300"></div>
        </div>

        <Flex className="mt-10 flex-wrap items-center justify-between gap-4">
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
        </Flex>
      </Container>
    </section>
  );
};

export default ShopCategories;
