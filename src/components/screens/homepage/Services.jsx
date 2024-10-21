import React from "react";
import Container from "../../common/Container";
import Flex from "./../../common/Flex";
import Image from "./../../common/Image";
import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="my-10">
      <Container>
        <Flex className="items-center mb-16 gap-10 flex-col lg:flex-row">
          <div className="lg:w-5/12">
            <Image src={slide1} alt="slide" className=" w-[50%]  mx-auto" />
          </div>
          <div className="lg:w-7/12">
            <h2 className=" font-bold text-3xl 2xl:text-4xl">
              Build your Building with SPL PVC pipe Fittings
            </h2>

            <p className="mt-5 font-semibold text-xl">
              Whether you’re moving out of Building for the first time or you’re
              upgrading your home with SPL PVC PIPE FITTINGS, we have the best
              quality PVC PIPE FITTINGS at an affordable price.
            </p>

            <Link
              to="/products/viewcategories/PVC Fittings"
              className=" py-2 px-4 bg-black font-medium text-2xl text-white inline-block mt-5"
            >
              View PVC Fitings
            </Link>
          </div>
        </Flex>

        <Flex className="items-center mb-16 gap-10 flex-col-reverse lg:flex-row">
          <div className="lg:w-7/12">
            <h2 className=" font-bold text-3xl 2xl:text-4xl">
              Build your Washroom with SPL Bathroom Fittings
            </h2>

            <p className="mt-5 font-semibold text-xl ">
              Whether you’re moving out of Building for the first time or you’re
              upgrading your home with SPL Bathroom FITTINGS, we have the best
              quality Bathroom FITTINGS at an affordable price .
            </p>

            <Link
              to="/products/viewcategories/PVC Bathroom Fittings"
              className=" py-2 px-4 bg-black font-medium text-2xl text-white inline-block mt-5"
            >
              View Bathroom Fitings
            </Link>
          </div>
          <div className="lg:w-5/12">
            <Image src={slide2} alt="slide" className="w-[60%] mx-auto" />
          </div>
        </Flex>

        <Flex className="items-center mb-16 gap-10 flex-col lg:flex-row">
          <div className="lg:w-5/12">
            <Image src={slide2} alt="slide" className="w-[60%] mx-auto" />
          </div>
          <div className="lg:w-7/12">
            <h2 className=" font-bold text-3xl 2xl:text-4xl">
              Build your Washroom with SPL Threat Fittings
            </h2>

            <p className="mt-5 font-semibold text-xl ">
              Whether you’re moving out of Building for the first time or you’re
              upgrading your home with SPL Threat Fittings, we have the best
              quality Threat Fittings at an affordable price .
            </p>

            <Link
              to="/products/viewcategories/Thread Fittings"
              className=" py-2 px-4 bg-black font-medium text-2xl text-white inline-block mt-5"
            >
              View Threat Fitings
            </Link>
          </div>
        </Flex>

        <div className=" my-10 text-center">
          <h2 className="font-bold text-3xl 2xl:text-4xl">
            Why You Choose SPL Fittings
          </h2>

          <p className="mt-5 font-semibold text-xl">
            SPL company has an established reputation for providing affordable
            PVC pipe fittings in the local market. We allow our customers to
            conveniently shop for and buy, offering unparalleled choice and
            unbeatable value to customers throughout Bangladesh. We pride
            ourselves on stocking an extensive range of quality products,
            perfect for performing any bathroom task and pipe fittings in
            building builds.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Services;
