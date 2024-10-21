import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaCartShopping, FaRegEye, FaShare } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { cartReducer } from "../../redux/features/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const ItemCardProtrait = ({ className, data }) => {
  const dispatch = useDispatch(); // dispatch instance

  // function for add the product to the cart
  const addToCart = () => {
    dispatch(cartReducer({ ...data, qun: 1 }));
    toast.success("Item is added");
  };

  // function for copy the product link
  const handleShare = () => {
    // let link = `https://www.mssmcorporation.com/product/${data.id}`;
    // navigator.clipboard
    //   .writeText(link)
    //   .then(() => toast.success("Item is added"));
  };
  return (
    <div
      className={`${className} relative overflow-hidden rounded-xl bg-white p-2 duration-150 ease-in-out hover:scale-[1.02] hover:shadow-custom`}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Flex className="group absolute right-[-58px] top-2 flex-col bg-white shadow-lg duration-200 ease-in-out hover:right-0">
        <button
          onClick={handleShare}
          className="flex items-center gap-5 text-balance p-3 font-semibold duration-200 ease-in-out group-hover:gap-2"
        >
          <FaShare /> Share
        </button>
      </Flex>
      <div className="h-[250px] w-full">
        <Image
          className="mx-auto h-full w-full object-cover"
          src={data.thumbnail}
          alt="item"
        />
      </div>

      <div>
        <Link
          to={`/product/${data.id}`}
          className="block text-center text-lg font-semibold text-black"
        >
          {data.title.slice(0, 20)}
        </Link>

        <p className="text-center text-lg font-bold text-red-500">
          {/* Size: {data.dimensions} */}
        </p>
        <p className="text-center text-xl font-bold text-red-500">
          {data.price > 0 ? `৳ ${data.price} BDT` : "Price to be announced"}
        </p>

        <Flex className="mt-2 items-center gap-1">
          <Link
            to={`/product/${data.id}`}
            className="flex w-[50%] items-center justify-center gap-2 rounded-md bg-primary p-2 text-lg font-semibold text-white"
          >
            <FaRegEye /> View
          </Link>

          {data.price > 0 ? (
            <button
              onClick={addToCart}
              className="flex w-[50%] items-center justify-center gap-2 rounded-md border-[1px] border-primary p-2 text-lg font-semibold text-primary duration-150 ease-in-out hover:bg-primary hover:text-white"
            >
              <FaCartShopping /> Cart
            </button>
          ) : (
            <button className="pointer-events-none flex w-[50%] items-center justify-center gap-2 rounded-md border-[1px] border-gray-500 p-2 text-lg font-semibold text-gray-400 hover:bg-black hover:text-white">
              <FaCartShopping /> Cart
            </button>
          )}
        </Flex>
      </div>
    </div>
  );
};

export default ItemCardProtrait;
