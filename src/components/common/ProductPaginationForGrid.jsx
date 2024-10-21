import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Flex from "./Flex";
import ItemCardProtrait from "./ItemCardProtrait";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const PaginationForGrid = ({ itemsPerPage, products }) => {
  // Example items, to simulate fetching from another resources.
  const items = products;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems.length == 0 && (
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
        <Flex className="flex-wrap items-center justify-between gap-[12px]">
          {currentItems &&
            currentItems.map((item, i) => (
              <ItemCardProtrait
                data={item}
                className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]"
                key={i}
              />
            ))}
        </Flex>
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  // console.log(typeof endOffset);
  return (
    <>
      <Items currentItems={currentItems} />
      <Flex className="my-16 flex-col items-center justify-between gap-5 md:flex-row lg:mb-[140px] lg:mt-[50px] lg:gap-0">
        <ReactPaginate
          breakLabel="..."
          className="ml-[-15px] flex justify-center gap-4"
          activeClassName="border-[1px] border-primary text-primary"
          pageClassName=" p-5 border-[1px] border-[#F0F0F0] font-normal text-base text-secondary"
          nextLabel=">"
          nextClassName="p-5  font-normal bg-primary text-base text-white"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          previousClassName="p-5  font-normal bg-primary text-base text-white"
          renderOnZeroPageCount={null}
        />

        <p className="font-dm text-secondary text-[14px] font-normal leading-[30px]">
          Products from {itemOffset} to {endOffset} of {items.length}
        </p>
      </Flex>
    </>
  );
};

export default PaginationForGrid;
