import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Home from "./home/home";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import { Toast } from "bootstrap";
import Alert from "./global/alert";
import GoToTopBtn from "./global/goToTopBtn";
import Shop from "./shop/shop-page/shop";
import TransitionScrollToTopBtn from "../transitionScrollToTopBtn";
import Page404 from "../page404";
import ProductDetails from "./shop/product-details/ProductDetails";
import Checkout from "./shop/checkout/checkout";
import Cart from "./shop/cart-page/cart";
import WishlistPage from "./shop/wishlistPage";
import UserAccount from "./user account/userAccount";
import SearchModal from "./modals/searchModal";
import LoginModal from "./modals/login modal/loginModal";
import CartModal from "./modals/shopping-cart/cartModal";
import QvModal from "./modals/qv modal/qvModal";
import CompareProductsModal from "./modals/compare products/compareProductsModal";
import ForgotPassword from "../forgotPassword";
import About from "./about/about";
import Contact from "./contact/contact";
import Faq from "./faq/faq";

const App = () => {
  const [isLogged, setIsLogged] = useState(null);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const location = useLocation();
  const [currenLocation, setCurrentLocation] = useState("Home");
  const [alertmsg, setAlertMsg] = useState("");
  const [locallyStorage, setLocallyStorage] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [quickViewPro, setQuickViewPro] = useState(null);
  const [compareProduct, setCompareProduct] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [goToTopBtn, setGoToTopBtn] = useState(false);
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const AlertHolder = React.createRef();

  // START handling log IN | OUT

  const handlingLogIn = () => {
    navigate("/my-account");
    window.sessionStorage.setItem("ahmed", JSON.stringify({ loggedin: true }));
    setIsLogged(true);
    updateLocalStorage("loggedIn", true);
  };
  const handlingLogOut = () => {
    window.sessionStorage.setItem("ahmed", JSON.stringify({ loggedin: false }));
    setIsLogged(false);
    navigate("/", { replace: true });
    updateLocalStorage("loggedIn", false);
  };

  // END handling log IN | OUT

  // Start Handling Alert Fun
  const handleAlert = () => {
    const alertParent = AlertHolder.current;
    const myToast = new Toast(alertParent);
    myToast.show();
  };
  // End Handling Alert Fun
  //########################################################################################################
  // START HANDLING GO TO TOP BTN
  useEffect(() => {
    function handlingGoToTopBtn() {
      if (window.scrollY > 400) {
        setGoToTopBtn(true);
      }
      if (window.scrollY <= 400) {
        setGoToTopBtn(false);
      }
    }
    window.addEventListener("scroll", handlingGoToTopBtn);
    handlingGoToTopBtn();
  }, [window.scrollY]);
  // END HANDLING GO TO TOP BTN
  //########################################################################################################
  // START DEALING WITH SCREEN SIZE

  useLayoutEffect(() => {
    function updateSizeLarge() {
      return window.innerWidth > 991
        ? setIsLgScreen(true)
        : setIsLgScreen(false);
    }

    window.addEventListener("resize", updateSizeLarge);
    updateSizeLarge();
  }, [window.innerWidth]);
  // END DEALING WITH SCREEN SIZE
  //########################################################################################################
  // START UPDATING LOCALSTORAGE FUN

  const updateLocalStorage = (key, value) => {
    const data = { ...locallyStorage };
    data[key] = value;
    setLocallyStorage(data);
    window.localStorage.setItem("ahmed", JSON.stringify(data));
  };

  // END UPDATING LOCALSTORAGE FUN
  //########################################################################################################

  const handleAddToWishList = (product) => {
    const data = [...wishlist];
    const indx = data.findIndex((item) => item.id === product.id);
    if (indx !== -1) {
      handleRemoveFromWishList(product);
      setAlertMsg("Product is Deleted From wishlist :(");
      handleAlert();
      return;
    }
    const date = new Date().toLocaleString("en-us", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
    });
    data.unshift({ ...product, addingDate: date });
    setWishlist(data);
    updateLocalStorage("wishlist", data);
    setAlertMsg("Product Added Successfuly To Wishlist :)");
    handleAlert();
  };

  const handleRemoveFromWishList = (product) => {
    const data = [...wishlist].filter((pro) => pro.id !== product.id);
    setWishlist(data);
    updateLocalStorage("wishlist", data);
  };

  // END ADD-TO-WISHLIST FUN
  //########################################################################################################
  // START CART FUNs

  const handleAddToCartFun = (product, amount = 1, inWishList) => {
    const data = [...cart];
    const productObj = { ...product, amount, inWishList };
    const indx = data.findIndex((pro) => pro.id === productObj.id);
    if (indx !== -1) {
      setAlertMsg("Product Already in cart !");
      handleAlert();
      return;
    }
    data.unshift(productObj);
    data.forEach((pro, indx) => (pro.cartID = indx));
    setCart(data);
    updateLocalStorage("cart", data);
    updateCartotalCost(data);
    setAlertMsg("Product Added Successfuly in cart :)");
    handleAlert();
  };

  const handleRemoveFromCart = (id) => {
    const data = [...cart].filter((pro) => pro.cartID !== id);
    setCart(data);
    updateLocalStorage("cart", data);
    updateCartotalCost(data);
    setAlertMsg("product has been Removed Successfuly from cart");
    handleAlert();
  };

  const updateCartotalCost = (cartArr) => {
    const totalCost = cartArr.reduce((acc, curr) => {
      let discount = 0;
      if (curr.discount) discount = curr.discount;
      const totalPrice = (curr.price - discount) * curr.amount;
      return acc + totalPrice;
    }, 0);
    setCartTotal(totalCost);
  };

  useEffect(() => {
    updateCartotalCost(cart);
  }, [cart]);

  const handleCartUpdateAmount = (id, newAmount) => {
    const data = [...cart];
    const indx = data.findIndex((pro) => pro.cartID === id);
    data[indx].amount = newAmount;
    setCart(data);
    updateCartotalCost(data);
    updateLocalStorage("cart", data);
  };

  // END CART FUNs
  //########################################################################################################
  // START QV FUN

  const handleQuickViewPro = (product) => {
    setQuickViewPro(product);
  };
  // END QV FUN
  //########################################################################################################
  //START COMPARE-PRODUCTS FUN

  const handleComparePro = (product) => {
    if (compareProduct.length === 3) {
      setAlertMsg("Compare Table Is Full !");
      handleAlert();
      return;
    }
    const data = [...compareProduct];
    const indx = data.findIndex((pro) => pro.id === product.id);
    if (indx !== -1) return;
    data.push(product);
    updateLocalStorage("compare", data);
    setCompareProduct(data);
  };

  const handleRemoveFromCompare = (id) => {
    const data = [...compareProduct].filter((pro) => pro.id !== id);
    setCompareProduct(data);
    updateLocalStorage("compare", data);
  };

  //END COMPARE-PRODUCTS FUN
  //########################################################################################################
  // START DEALING WITH APP NAV
  useEffect(() => {
    const current = location.pathname === "/" ? "Home" : "Not-Home";
    setCurrentLocation(current);
  }, [location]);
  // END DEALING WITH APP NAV
  //########################################################################################################
  // START FETCHING DATA FROM JSON FILE
  useEffect(() => {
    fetchingApiDataFromJsonFile();
  }, []);

  const fetchingApiDataFromJsonFile = async () => {
    try {
      const request = await fetch("ahmed.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await request.json();
      const categories = data?.categories;
      const allProducts = data?.products;
      const bestSellingProducts = data?.products.filter((item) =>
        item.tags.includes("Hot")
      );
      const brands = data.brands;
      const testimonials = data.testimonials;
      setTestimonials(testimonials);
      setBrands(brands);
      setAllProducts(allProducts);
      setCategories(categories);
      setBestProducts(bestSellingProducts);
    } catch (error) {
      console.log(error);
    }
  };
  // END FETCHING DATA FROM JSON FILE

  // Start MANAGING LOCAL/SESSION STORAGE
  useEffect(() => {
    // LOCAL STORAGE
    const inLocallyStorage = JSON.parse(window.localStorage.getItem("ahmed"));
    if (inLocallyStorage) {
      setLocallyStorage(inLocallyStorage);

      if (inLocallyStorage.wishlist) {
        setWishlist(inLocallyStorage.wishlist);
      } else {
        setWishlist([]);
      }

      if (inLocallyStorage.cart) {
        setCart(inLocallyStorage.cart);
      } else {
        setCart([]);
      }

      if (inLocallyStorage.compare) {
        setCompareProduct(inLocallyStorage.compare);
      } else {
        setCompareProduct([]);
      }

      if (inLocallyStorage.loggedIn) {
        if (inLocallyStorage.loggedIn === true) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      }
    }
    // SESSION STORAGE
    const inSession = JSON.parse(window.sessionStorage.getItem("ahmed"));
    if (inSession) {
      if (inSession.loggedin) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    }
  }, []);

  // END MANAGING LOCAL/SESSION STORAGE
  //########################################################################################################
  return (
    <div data-page={`${currenLocation}`}>
      <Header
        isLogged={isLogged}
        isLgScreen={isLgScreen}
        wishlist={wishlist}
        cart={cart}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                categories={categories}
                allProducts={allProducts}
                bestSellerPro={bestProducts}
                wishlist={wishlist}
                onAddToWishList={handleAddToWishList}
                onAddToCart={handleAddToCartFun}
                onCompare={handleComparePro}
                onQuickView={handleQuickViewPro}
                isLgScreen={isLgScreen}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                categories={categories}
                allProducts={allProducts}
                bestSellerPro={bestProducts}
                wishlist={wishlist}
                onAddToWishList={handleAddToWishList}
                onAddToCart={handleAddToCartFun}
                onCompare={handleComparePro}
                onQuickView={handleQuickViewPro}
                isLgScreen={isLgScreen}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                allProducts={allProducts}
                categories={categories}
                brands={brands}
                wishlist={wishlist}
                onAddToWishList={handleAddToWishList}
                onAddToCart={handleAddToCartFun}
                onCompare={handleComparePro}
                onQuickView={handleQuickViewPro}
                isLgScreen={isLgScreen}
              />
            }
          />
          <Route
            path="/shop/:name"
            element={
              <ProductDetails
                allProducts={allProducts}
                onAddToWishList={handleAddToWishList}
                onAddToCart={handleAddToCartFun}
                onCompare={handleComparePro}
                wishlist={wishlist}
                isLgScreen={isLgScreen}
              />
            }
          />
          <Route
            path="/shop/checkout"
            element={
              <Checkout cart={cart} cartTotal={cartTotal} isLogged={isLogged} />
            }
          />
          <Route
            path="/shop/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={handleRemoveFromCart}
                updateCartAmount={handleCartUpdateAmount}
                totalCost={cartTotal}
              />
            }
          />
          <Route
            path="/shop/wishlist"
            element={
              <WishlistPage
                wishlist={wishlist}
                addingToCart={handleAddToCartFun}
                removeFromWishlist={handleRemoveFromWishList}
              />
            }
          />
          <Route
            path="/my-account"
            element={
              <UserAccount isLogged={isLogged} logeOut={handlingLogOut} />
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/about"
            element={<About testimonials={testimonials} brands={brands} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer isLgScreen={isLgScreen} />
      {/* Modals */}
      <SearchModal />
      <LoginModal isLogged={isLogged} handlingLogIn={handlingLogIn} />
      <CartModal
        cart={cart}
        cartTotal={cartTotal}
        removeFromCart={handleRemoveFromCart}
      />
      <QvModal
        product={quickViewPro}
        addingToCart={handleAddToCartFun}
        wishlist={wishlist}
      />
      <CompareProductsModal
        compareProducts={compareProduct}
        removeFromCompare={handleRemoveFromCompare}
        addingToCart={handleAddToCartFun}
        wishlist={wishlist}
      />
      {/* Alert */}
      <Alert ref={AlertHolder} msg={alertmsg} />
      {/* GoToTopBtn */}
      <GoToTopBtn show={goToTopBtn} />
      {/* TransitionScrollToTopBtn */}
      <TransitionScrollToTopBtn />
    </div>
  );
};

export default App;
