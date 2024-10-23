import React, { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import Image from "../common/Image";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/features/LoadAllProductsSlice";
import { removeProduct } from "../../redux/features/CartSlice";
import { logoutUser } from "../../redux/features/AuthSlice";
import { IoGridOutline } from "react-icons/io5";
import { FaAngleDown, FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaTimes, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const products = useSelector((state) => state.allProducts.products); // get all products from the redux
  const cart = useSelector((state) => state.cartArray.cart); // get cart info from the redux
  const customerdata = useSelector((state) => state.user.user); // get customer info from the redux
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigation instance
  // all states and refs for toggle context menu
  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);
  const [searchRef, setSearchRef] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [category, setCategory] = useState([]); // state for unique category
  const [search, setSearch] = useState([]); // initial state all products for searching
  const [filterResult, setFilterResult] = useState([]); // state for storing the products after searching
  const categoryRef = useRef();
  const accountRef = useRef();
  const cartRef = useRef();
  const searchResultRef = useRef();

  // function for remove item from cart
  const removeItemFromCart = (item) => {
    dispatch(removeProduct(item.id));
  };

  // function for handle search
  const handleSearch = (e) => {
    if (e.target.value == "") {
      setFilterResult([]);
    } else {
      const searchResult = search.filter((searchItem) =>
        searchItem.title.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setFilterResult(searchResult); // state for store the search result
    }
  };

  // function for logout customer
  const handleLogout = () => {
    dispatch(logoutUser({ status: false }));
    navigate("/");
    setTimeout(() => {
      location.reload();
    }, 2000);
  };

  /**
   * function for store all products coming from the API
   * store in redux store
   */
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      dispatch(allProducts(res.data.products));
      setSearch(res.data.products);
    };
    fetchProducts();
  }, []);

  // segment for all pop up click
  useEffect(() => {
    document.addEventListener("click", (e) => {
      categoryRef.current.contains(e.target)
        ? setToggleCategory(true)
        : setToggleCategory(false);
      accountRef.current.contains(e.target)
        ? setToggleAccount(true)
        : setToggleAccount(false);
      cartRef.current.contains(e.target)
        ? setToggleCart(true)
        : setToggleCart(false);
      searchResultRef.current.contains(e.target)
        ? setSearchRef(true)
        : setSearchRef(false);
    });
  }, []);

  // function for set the cetegory
  useEffect(() => {
    setCategory([...new Set(products.map((item) => item.category))]);
  }, [products]);

  return (
    <header className="bg-primary py-2">
      <Container>
        <Flex className="items-center justify-between gap-2 xl:gap-5">
          <div className="relative w-3/12 md:w-2/12">
            <div ref={categoryRef}>
              <Flex className="cursor-pointer items-center justify-center gap-2">
                <IoGridOutline className="text-[24px] text-white" />

                <span className="hidden text-sm font-bold text-white lg:block xl:text-xl">
                  View Categories
                </span>

                <FaAngleDown className="hidden text-[24px] text-white lg:block" />
              </Flex>
            </div>
            {toggleCategory && (
              <List className="absolute left-0 top-[48px] z-[100] w-[300px] bg-primary md:left-[18px] md:w-[300px]">
                {category.map((item, i) => (
                  <ListItem
                    key={i}
                    className="block px-2 py-4 text-xl font-bold capitalize text-white duration-300 ease-in-out hover:pl-5"
                  >
                    <Link to={`/products/viewcategories/${item}`}>{item}</Link>
                  </ListItem>
                ))}
              </List>
            )}
          </div>
          <div className="w-6/12 md:w-7/12 xl:w-8/12">
            <div ref={searchResultRef} className="relative w-full">
              <input
                onChange={handleSearch}
                className="w-full rounded-[5px] p-3 pr-[50px] text-lg font-medium"
                type="text"
                name=""
                id=""
                placeholder="Search by keyword"
              />

              <FaSearch className="absolute right-3 top-[50%] translate-y-[-50%] text-[24px] text-black" />

              {searchRef && (
                <div className="fixed left-0 top-[140px] z-[100] max-h-[300px] w-full overflow-y-scroll bg-white md:absolute md:top-14">
                  {filterResult.length > 0 ? (
                    filterResult.map((filterItem, i) => (
                      <Flex
                        key={i}
                        className={`mb-2 items-center justify-between bg-white p-2 hover:bg-gray-200`}
                      >
                        <Flex className={`items-center gap-4`}>
                          <Image
                            src={filterItem.thumbnail}
                            alt={""}
                            className={`h-[80px] w-[80px] object-cover`}
                          />
                          <div>
                            <h2 className="text-xl font-semibold">
                              {filterItem.title}
                            </h2>

                            <h3 className="mt-1 text-sm font-normal">
                              ৳ {filterItem.price} BDT
                            </h3>
                          </div>
                        </Flex>

                        <Link
                          to={`/product/${filterItem.id}`}
                          className="mr-2 bg-slate-800 px-4 py-2 text-sm font-normal text-white"
                        >
                          View
                        </Link>
                      </Flex>
                    ))
                  ) : (
                    <h1 className="font-dm mt-2 text-center text-xl font-semibold">
                      No Products Found
                    </h1>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="w-3/12 md:w-2/12">
            <Flex className="relative items-center justify-end gap-5">
              <div ref={accountRef}>
                <Flex className="cursor-pointer items-center gap-2">
                  <FaUserCircle className="text-[24px] text-white" />

                  <span className="hidden text-sm font-bold text-white lg:block xl:text-xl">
                    Account
                  </span>
                </Flex>
              </div>

              {toggleAccount && (
                <>
                  {customerdata.status ? (
                    <div className="absolute right-0 top-[48px] z-[100] w-[300px] bg-primary p-3">
                      <h3 className="text-lg font-medium text-white">
                        Welcome,
                      </h3>

                      <h2 className="text-xl font-bold text-white">
                        {customerdata.user}
                      </h2>

                      <p className="text-base font-normal capitalize text-white">
                        Email:{" "}
                        <span className="lowercase">{customerdata.email}</span>
                      </p>
                      <p className="text-base font-normal text-white">
                        Phone: {customerdata.phone}
                      </p>

                      <Flex className="mt-5 gap-2">
                        <Link
                          to="/profile"
                          className="flex w-[50%] items-center justify-center gap-2 border-[1px] border-white p-2 text-lg font-semibold text-white"
                        >
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex w-[50%] items-center justify-center gap-2 border-[1px] border-white p-2 text-lg font-semibold text-white"
                        >
                          Logout
                        </button>
                      </Flex>
                    </div>
                  ) : (
                    <Flex className="absolute right-0 top-[48px] z-[100] w-[300px] gap-2 bg-primary p-3">
                      <button
                        onClick={() => navigate("/login")}
                        className="flex w-[50%] items-center justify-center gap-2 border-[1px] border-white p-2 text-lg font-semibold text-white"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => navigate("/signup")}
                        className="flex w-[50%] items-center justify-center gap-2 border-[1px] border-white p-2 text-lg font-semibold text-white"
                      >
                        Signup
                      </button>
                    </Flex>
                  )}
                </>
              )}

              <div ref={cartRef}>
                <Flex className="cursor-pointer items-center gap-2">
                  <FaCartShopping className="text-[24px] text-white" />

                  <span className="jus hidden items-center gap-2 text-sm font-bold text-white lg:flex xl:text-xl">
                    Cart{" "}
                    <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white text-sm text-black">
                      {cart.length}
                    </span>
                  </span>
                </Flex>
              </div>

              {toggleCart && (
                <div className="absolute right-0 top-[48px] z-[100] w-[300px] bg-slate-800 p-3 md:w-[360px]">
                  <div className="no-scrollbar max-h-[220px] overflow-y-scroll">
                    {cart.length > 0 ? (
                      cart.map((item, i) => (
                        <Flex
                          className="group mb-5 w-full items-center gap-5 hover:bg-white"
                          key={i}
                        >
                          <div className="w-3/12">
                            <Image
                              src={item.thumbnail}
                              alt="item"
                              className="h-[80px] w-[80px]"
                            />
                          </div>

                          <div className="w-9/12">
                            <Flex className="items-center justify-between">
                              <h3 className="text-lg font-medium text-white group-hover:text-black">
                                {item.title.slice(0, 23)}
                              </h3>

                              <FaTimes
                                onClick={() => removeItemFromCart(item)}
                                className="cursor-pointer text-white group-hover:text-black"
                              />
                            </Flex>

                            {/* <p className="text-base font-semibold text-white group-hover:text-black">
                              Size: {item.dimensions}
                            </p> */}
                            <p className="text-base font-semibold text-white group-hover:text-black">
                              Qun: x {item.qun}
                            </p>
                            <p className="text-base font-semibold text-white group-hover:text-black">
                              Price: ৳ {item.price} BDT
                            </p>
                          </div>
                        </Flex>
                      ))
                    ) : (
                      <h2 className="text-lg font-bold text-white">
                        Your Cart is empty
                      </h2>
                    )}
                  </div>

                  <button
                    onClick={() => navigate("/cart")}
                    className="mt-10 flex w-full items-center justify-center gap-2 border-[1px] border-white p-2 text-lg font-semibold text-white"
                  >
                    Go to Cart
                  </button>
                </div>
              )}
            </Flex>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
