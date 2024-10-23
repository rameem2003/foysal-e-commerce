import React, { useRef, useState } from "react";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import logo from "../../../assets/logo.png";
import { useReactToPrint } from "react-to-print";

const OrderCard = ({ data }) => {
  console.log(data);

  const [printScreen, setPrintScreen] = useState(false);
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: data.customerName + data.orderID,
  });

  return (
    <>
      <div className="mb-10 w-full border-b-[2px] border-black py-5">
        <Flex className="mb-3 flex-col items-center justify-between gap-5 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <p className="text-lg font-semibold text-red-700">
              Order id: {data.orderID}
            </p>
            <p className="text-lg font-semibold text-black">
              Order Date: {data.orderTimeStamp}
            </p>
            <p className="text-lg font-semibold text-black">
              Payment Status:{" "}
              {data.paidStatus ? (
                <span className="rounded-full bg-green-600 px-5 py-1 text-white">
                  Paid
                </span>
              ) : (
                <span className="rounded-full bg-red-600 px-5 py-1 text-white">
                  Not Paid
                </span>
              )}
            </p>
            <p className="text-lg font-semibold text-black">
              Transaction ID: {data.transactionID}
            </p>
            <p className="text-lg font-semibold text-black">
              Shipping Agent: {data.shippingAgent}
            </p>
          </div>
          <div className="w-full text-center lg:w-1/2 lg:text-right">
            {data.orderStatus == "pending" && (
              <span className="rounded-full border-[2px] border-yellow-500 p-1 text-right text-yellow-500">
                Order is pending
              </span>
            )}

            {data.orderStatus == "shipping" && (
              <span className="rounded-full border-[2px] border-purple-500 p-1 text-right text-purple-500">
                Order is shipping
              </span>
            )}
            {data.orderStatus == "completed" && (
              <span className="rounded-full border-[2px] border-green-500 p-1 text-right text-green-500">
                Order is completed
              </span>
            )}
            {data.orderStatus == "canceled" && (
              <span className="rounded-full border-[2px] border-red-500 p-1 text-right text-red-500">
                Order is canceled
              </span>
            )}
          </div>
        </Flex>

        <Flex className="mb-3 flex-wrap items-center justify-between gap-5">
          <p className="text-lg font-medium text-black">
            Address: {data.address}
          </p>
          <p className="text-lg font-medium text-black">Area: {data.area}</p>
          <p className="text-lg font-medium text-black">
            District: {data.district}
          </p>
          <p className="text-lg font-medium text-black">
            Post Code: {data.postcode}
          </p>
        </Flex>

        <div className="">
          {data.cart?.map((item, i) => (
            <Flex key={i} className="mb-5 flex-col gap-5 lg:flex-row">
              <div className="w-full lg:w-7/12">
                <h3 className="mb-1 text-xl font-bold text-red-700">
                  {item.title}
                </h3>

                <Flex className="items-center justify-between gap-5">
                  <p className="text-lg font-semibold text-black">
                    Product id: <span className="text-red-700">{item.id}</span>
                  </p>
                  <p className="text-lg font-semibold text-black">
                    Quntity: <span className="text-red-700">{item.qun}</span>
                  </p>
                  <p className="text-lg font-semibold text-black">
                    Subtotal:{" "}
                    <span className="text-red-700">
                      {item.qun * item.price}
                    </span>
                  </p>
                </Flex>
              </div>
              <div className="w-full lg:w-5/12">
                <Image
                  className="mx-auto h-[120px] w-[120px] lg:ml-auto"
                  src={item.thumbnail}
                />
              </div>
            </Flex>
          ))}
        </div>

        <Flex className="flex-col items-center justify-between gap-5 lg:flex-row">
          <h3 className="text-base font-bold text-black lg:text-3xl">
            Grand Total: ৳ {data.grandTotal} BDT
          </h3>

          <button
            onClick={() => setPrintScreen(!printScreen)}
            className="bg-black p-2 text-sm font-semibold text-white lg:text-base"
          >
            Generate Invoice
          </button>
        </Flex>
      </div>

      {/* print invoice section start */}
      {printScreen && (
        <div>
          <div ref={printRef} className="px-3 py-10">
            <p>Generation date: {new Date().toLocaleString()}</p>
            <Flex className="items-center justify-between">
              <div className="w-1/2">
                <h1 className="mt-5 text-2xl font-bold text-black">
                  M/S S M Corporation
                </h1>

                <h2 className="mt-2 text-sm font-medium text-black">
                  Address: DCC-86, Road No.-1, Rahmatbagh, Ashrafabad,
                  Kamrangirchar,Dhaka-1210
                </h2>

                <p className="mt-2 text-sm font-medium text-black">
                  Phone: 01748-121515, 01921-676695, 01933-788415
                </p>
              </div>

              <div className="w-1/2">
                <Image className="ml-auto w-[250px]" src={logo} alt="logo" />
              </div>
            </Flex>

            <p className="mb-10 text-center text-3xl font-bold text-black">
              Invoice
            </p>

            <p className="text-lg font-bold text-black">
              Customer Name: {data.customerName}
            </p>
            <p className="text-lg font-bold capitalize text-black">
              Order ID: {data.orderID}
            </p>
            <p className="text-lg font-bold capitalize text-black">
              Transaction ID: {data.transactionID}
            </p>
            <p className="text-lg font-bold text-black">Phone: {data.phone}</p>

            <p className="text-lg font-bold text-black">
              Shipping Agent: {data.shippingAgent}
            </p>

            <Flex className="mb-3 flex-wrap items-center justify-between gap-5">
              <p className="text-base font-normal text-black">
                Address: {data.address}
              </p>
              <p className="text-base font-normal text-black">
                Area: {data.area}
              </p>
              <p className="text-base font-normal text-black">
                District: {data.district}
              </p>
              <p className="text-base font-normal text-black">
                Post Code: {data.postcode}
              </p>
            </Flex>

            <div className="relative mt-5 overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
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
                    <tr className="border-b bg-white" key={i}>
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
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

            <h3 className="mt-5 text-right text-3xl font-bold text-black">
              Grand Total: ৳ {data.grandTotal} BDT
            </h3>
          </div>

          <button
            onClick={handlePrint}
            className="bg-red-700 p-2 text-base font-semibold text-white"
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
