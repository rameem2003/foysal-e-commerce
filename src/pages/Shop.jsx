import React, { useEffect, useMemo, useState } from "react";
import BreadCrums from "../components/common/BreadCrums";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import PaginationForGrid from "../components/common/ProductPaginationForGrid";
import { useSelector } from "react-redux";

const Shop = () => {
  const products = useSelector((state) => state.allProducts.products); // get all products from the redux
  const [categoryFilter, setCategoryFilter] = useState([]); // state for filter by category
  const [itemShow, setItemShow] = useState(12); // state for item show number
  const [category, setCategory] = useState([]); // state for unique category
  const [group, setGroup] = useState([]); // state for unique group

  // filter products by the category name
  const showByCategory = (cat) => {
    if (cat === "all") {
      setCategoryFilter(products);
    } else {
      const filterCategory = products.filter((item) => item.category == cat);
      setCategoryFilter(filterCategory);
    }
  };

  // filter products by the group name
  const showByGroup = (group) => {
    if (group == "all") {
      setCategoryFilter(products);
    } else {
      const filterCategory = products.filter((item) => item.group == group);
      setCategoryFilter(filterCategory);
    }
  };
  useEffect(() => {
    setCategory([...new Set(products.map((item) => item.category))]);
    setGroup([...new Set(products.map((item) => item.group))]);
    setCategoryFilter(products);
  }, [products]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="my-10">
      <Container>
        <BreadCrums location="Shop" />

        <div className="mt-[100px]">
          <Flex className="flex-col items-center justify-between gap-2 md:flex-row">
            <div className="w-full md:w-4/12">
              <h2 className="mb-1 text-lg font-semibold text-black">
                Category
              </h2>
              <select
                onChange={(e) => showByCategory(e.target.value)}
                className="w-full rounded-xl border-[1px] border-primary p-3"
                name=""
                id=""
              >
                <option selected disabled value="">
                  Choose Category
                </option>
                <option className="capitalize" value="all">
                  All
                </option>

                {category.map((item, i) => (
                  <option className="capitalize" value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-4/12">
              <h2 className="mb-1 text-lg font-semibold text-black">
                Filter Group
              </h2>
              <select
                onChange={(e) => showByGroup(e.target.value)}
                className="w-full rounded-xl border-[1px] border-primary p-3 capitalize"
                name=""
                id=""
              >
                <option selected disabled value="">
                  Choose Group
                </option>
                <option value="all">All</option>
                {group.map((item, i) => (
                  <option className="capitalize" value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-4/12">
              <h2 className="mb-1 text-lg font-semibold text-black">Show</h2>
              <select
                onChange={(e) => setItemShow(parseInt(e.target.value))}
                className="w-full rounded-xl border-[1px] border-primary p-3"
                name=""
                id=""
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={36}>36</option>
              </select>
            </div>
          </Flex>

          <div className="mt-10">
            <PaginationForGrid
              itemsPerPage={itemShow}
              products={categoryFilter}
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Shop;
