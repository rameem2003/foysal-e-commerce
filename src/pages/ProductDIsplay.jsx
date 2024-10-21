import React, { useEffect, useState } from "react";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";
import ItemCardProtrait from "../components/common/ItemCardProtrait";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaCartShopping, FaShare } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { cartReducer } from "../redux/features/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductDIsplay = () => {
  const dispatch = useDispatch(); // dispatch instance
  const products = useSelector((state) => state.allProducts.products); // get all products from the redux
  const { id } = useParams(); // get the product ID
  const [data, setData] = useState({}); // state for store product info
  const [relatedBrands, setRelatedBrands] = useState([]); // state for related products

  console.log(data);

  // get the product info
  const fetchProduct = async () => {
    const res = await axios.get(
      `https://smcorpapi.vercel.app/api/products/${id}`
    );
    // let filter = products.filter((item) => item.category == data.category);
    // setRelatedBrands(filter);
    setData(res.data);
  };

  // function for add the product to the cart
  const addToCart = () => {
    dispatch(cartReducer({ ...data, qun: 1 }));
    toast.success("Item is added");
  };

  // function for copy the product link
  const handleShare = () => {
    let link = `https://www.mssmcorporation.com/product/${id}`;
    navigator.clipboard
      .writeText(link)
      .then(() => toast.success("Item is added"));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchProduct();
  }, []);

  return (
    <main className="my-10">
      <Container>
        <Toaster position="top-right" reverseOrder={false} />
        <BreadCrums location="Product" />

        <Flex className="mt-[100px] gap-10 flex-col lg:flex-row">
          <div className=" w-full lg:w-1/2 xl:w-5/12 p-5 border-[2px] border-black">
            <Image
              className="w-full h-[600px] sm:w-[600px] sm:h-[600px] mx-auto"
              src={data.thumbnail}
            />
          </div>
          <div className=" w-full lg:w-1/2 xl:w-7/12">
            <h4 className=" font-semibold text-base md:text-lg xl:text-xl 2xl:text-2xl text-red-700 capitalize">
              Categoty: {data.category}
            </h4>

            <h1 className="mt-10 mb-5 font-bold text-xl md:text-2xl lg:text-3xl 2xl:text-5xl text-black">
              {data.title}
            </h1>

            <p className=" font-medium text-base text-gray-500">
              {data.description}
            </p>
            <p className=" font-bold text-2xl text-red-500">
              Size: {data.dimensions}
            </p>

            <Flex className="mt-5 gap-5  flex-wrap">
              <p className=" font-semibold text-lg text-black capitalize">
                Group:{" "}
                <span className=" font-extrabold text-red-700">
                  {data.group}
                </span>
              </p>
              <p className=" font-semibold text-lg text-black capitalize">
                Stock:{" "}
                <span className=" font-extrabold text-red-700 capitalize">
                  {data.stock > 0 || data.stock == "yes"
                    ? "available"
                    : "not available"}
                </span>
              </p>
              <p className=" font-semibold text-lg text-black capitalize">
                Warrenty:{" "}
                <span className=" font-extrabold text-red-700 capitalize">
                  {data.warranty}
                </span>
              </p>
              <p className=" font-semibold text-lg text-black capitalize">
                Return Policy:{" "}
                <span className=" font-extrabold text-red-700 capitalize">
                  {data.returnPolicy}
                </span>
              </p>
            </Flex>

            <h3 className="font-bold text-red-700 text-3xl lg:text-4xl mt-5">
              BDT: {data.price} ৳
            </h3>

            <Flex className="mt-5 gap-5 flex-col lg:flex-row">
              {data.price > 0 ? (
                <button
                  onClick={addToCart}
                  className="flex items-center justify-center gap-2 w-full lg:w-[40%] xl:w-[30%] p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white"
                >
                  <FaCartShopping /> Add To Cart Now
                </button>
              ) : (
                <button className=" pointer-events-none text-gray-400 flex items-center justify-center gap-2 w-full lg:w-[40%] xl:w-[30%] p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white">
                  <FaCartShopping /> Add To Cart Now
                </button>
              )}

              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 w-full lg:w-[40%] xl:w-[30%] p-2 border-[1px] border-gray-500 font-semibold text-lg hover:bg-black hover:text-white"
              >
                <FaShare /> Share Now
              </button>
            </Flex>
          </div>
        </Flex>

        {/* <h3 className=" mt-12 font-bold text-4xl text-black">
          Related Products:
        </h3>
        <Flex className="mt-12 flex-wrap gap-[12px] items-center justify-between">
          {relatedBrands.map((data, i) => (
            <ItemCardProtrait
              data={data}
              key={i}
              className=" w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]"
            />
          ))}
        </Flex> */}
      </Container>
    </main>
  );
};

export default ProductDIsplay;
