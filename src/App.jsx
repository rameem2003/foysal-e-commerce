import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Rootlayout from "./Layouts/Rootlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";
import ProductDIsplay from "./pages/ProductDIsplay";
import Profile from "./pages/Profile";
import ProtectorRoute from "./routes/ProtectorRoute";
import ViewCategories from "./pages/ViewCategories";
import NewsPage from "./pages/NewsPage";

function App() {
  const customerdata = useSelector((state) => state.user.user); // get customer info from the redux

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDIsplay />} />
        <Route
          path="/products/viewcategories/:cat"
          element={<ViewCategories />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/profile"
          element={
            <ProtectorRoute isLoggedin={customerdata.status}>
              <Profile />
            </ProtectorRoute>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
