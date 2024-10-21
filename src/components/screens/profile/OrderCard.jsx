import React, { useRef, useState } from "react";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import logo from "../../../assets/logo.png";
import { useReactToPrint } from "react-to-print";

const OrderCard = ({ data }) => {
  const [printScreen, setPrintScreen] = useState(false);
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: data.customerName + data.orderID,
  });

  return (
    <>
      <div className=" border-b-[2px] border-black mb-10 py-5 w-full">
        <Flex className=" flex-col lg:flex-row items-center justify-between gap-5 mb-3">
          <div className="w-full lg:w-1/2">
            <p className=" font-semibold text-lg text-red-700">
              Order id: {data.orderID}
            </p>
            <p className=" font-semibold text-lg text-black">
              Order Date: {data.orderTimeStamp}
            </p>
            <p className=" font-semibold text-lg text-black">
              Shipping Agent: {data.shippingAgent}
            </p>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            {data.orderStatus == "pending" && (
              <span className=" text-right p-1 rounded-full text-yellow-500 border-[2px] border-yellow-500">
                Order is pending
              </span>
            )}

            {data.orderStatus == "shipping" && (
              <span className=" text-right p-1 rounded-full text-purple-500 border-[2px] border-purple-500">
                Order is shipping
              </span>
            )}
            {data.orderStatus == "completed" && (
              <span className=" text-right p-1 rounded-full text-green-500 border-[2px] border-green-500">
                Order is completed
              </span>
            )}
            {data.orderStatus == "canceled" && (
              <span className=" text-right p-1 rounded-full text-red-500 border-[2px] border-red-500">
                Order is canceled
              </span>
            )}
          </div>
        </Flex>

        <Flex className="items-center justify-between flex-wrap gap-5 mb-3">
          <p className="font-medium text-lg text-black">
            Address: {data.address}
          </p>
          <p className="font-medium text-lg text-black">Area: {data.area}</p>
          <p className="font-medium text-lg text-black">
            District: {data.district}
          </p>
          <p className="font-medium text-lg text-black">
            Post Code: {data.postcode}
          </p>
        </Flex>

        <div className="">
          {data.cart?.map((item, i) => (
            <Flex key={i} className="gap-5 flex-col lg:flex-row mb-5">
              <div className="w-full lg:w-7/12">
                <h3 className=" font-bold text-xl text-red-700 mb-1">
                  {item.title}
                </h3>

                <Flex className="items-center justify-between gap-5">
                  <p className=" font-semibold text-lg text-black">
                    Product id: <span className=" text-red-700">{item.id}</span>
                  </p>
                  <p className=" font-semibold text-lg text-black">
                    Quntity: <span className=" text-red-700">{item.qun}</span>
                  </p>
                  <p className=" font-semibold text-lg text-black">
                    Subtotal:{" "}
                    <span className=" text-red-700">
                      {item.qun * item.price}
                    </span>
                  </p>
                </Flex>
              </div>
              <div className="w-full lg:w-5/12">
                <Image
                  className="w-[120px] h-[120px] mx-auto lg:ml-auto"
                  src={item.thumbnail}
                />
              </div>
            </Flex>
          ))}
        </div>

        <Flex className="items-center justify-between flex-col lg:flex-row gap-5">
          <h3 className=" font-bold text-base lg:text-3xl text-black">
            Grand Total: ৳ {data.grandTotal} BDT
          </h3>

          <button
            onClick={() => setPrintScreen(!printScreen)}
            className=" p-2 bg-black font-semibold text-sm lg:text-base text-white"
          >
            Generate Invoice
          </button>
        </Flex>
      </div>

      {/* print invoice section start */}
      {printScreen && (
        <div>
          <div ref={printRef} className=" py-10 px-3">
            <p>Generation date: {new Date().toLocaleString()}</p>
            <Flex className="items-center justify-between">
              <div className="w-1/2">
                <h1 className="mt-5 font-bold text-2xl text-black">
                  M/S S M Corporation
                </h1>

                <h2 className=" mt-2 font-medium text-sm text-black">
                  Address: DCC-86, Road No.-1, Rahmatbagh, Ashrafabad,
                  Kamrangirchar,Dhaka-1210
                </h2>

                <p className=" mt-2 font-medium text-sm text-black">
                  Phone: 01748-121515, 01921-676695, 01933-788415
                </p>
              </div>

              <div className="w-1/2">
                <Image className="ml-auto w-[250px]" src={logo} alt="logo" />
              </div>
            </Flex>

            <p className=" font-bold text-3xl text-center text-black mb-10">
              Invoice
            </p>

            <p className=" font-bold text-lg text-black">
              Customer Name: {data.customerName}
            </p>
            <p className=" font-bold text-lg text-black capitalize">
              Customer type: {data.customerType}
            </p>
            <p className=" font-bold text-lg text-black">Phone: {data.phone}</p>

            <p className=" font-bold text-lg text-black ">
              Shipping Agent: {data.shippingAgent}
            </p>

            <Flex className="items-center justify-between flex-wrap gap-5 mb-3">
              <p className="font-normal text-base text-black">
                Address: {data.address}
              </p>
              <p className="font-normal text-base text-black">
                Area: {data.area}
              </p>
              <p className="font-normal text-base text-black">
                District: {data.district}
              </p>
              <p className="font-normal text-base text-black">
                Post Code: {data.postcode}
              </p>
            </Flex>

            <div className="relative overflow-x-auto mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Unit Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.cart?.map((data, i) => (
                    <tr className="bg-white border-b" key={i}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {data.title}
                      </th>
                      <td className="px-6 py-4">{data.qun}</td>
                      <td className="px-6 py-4">৳ {data.price} BDT</td>
                      <td className="px-6 py-4">
                        ৳ {data.qun * data.price} BDT
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className=" font-bold text-3xl text-black mt-5 text-right">
              Grand Total: ৳ {data.grandTotal} BDT
            </h3>
          </div>

          <button
            onClick={handlePrint}
            className=" p-2 bg-red-700 font-semibold text-base text-white"
          >
            Print
          </button>
        </div>
      )}

      {/* print invoice section end */}
    </>
  );
};

export default OrderCard;
