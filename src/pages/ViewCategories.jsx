import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import PaginationForGrid from "../components/common/ProductPaginationForGrid";
import ErrorPage from "./ErrorPage";

const ViewCategories = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    let res = await axios.get("https://dummyjson.com/products");
    console.log(res);

    let filter = res.data.products.filter((item) => item.category == cat);
    setProducts(filter);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
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
        <BreadCrums location={cat} />

        <div className="mt-[100px]">
          {loading ? (
            <h2 className="text-3xl font-bold">Loading....</h2>
          ) : products.length > 0 ? (
            <PaginationForGrid itemsPerPage={12} products={products} />
          ) : (
            <>
              <h2 className="text-3xl font-bold">
                No products found at this moment
              </h2>

              <ErrorPage />
            </>
          )}
        </div>
      </Container>
    </main>
  );
};

export default ViewCategories;
