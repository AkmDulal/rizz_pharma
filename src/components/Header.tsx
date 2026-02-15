import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/logo.svg";
import { Instagram, FacebookIcon } from "@/icon";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = [
    {
      id: 6,
      name: "Athletic Performance",
      path: "/category/athletic-performance",
    },
    { id: 1, name: "Beauty and Hair Loss", path: "/category/beauty-hair-loss" },
    { id: 5, name: "Brain Health", path: "/category/brain-health" },
    { id: 4, name: "Sexual Health", path: "/category/sexual-health" },
    { id: 3, name: "Testosterone HRT", path: "/category/testosterone-hrt" },
    { id: 2, name: "Weight Loss", path: "/category/weight-loss" },
  ];

  const topProducts = [
    {
      id: 51,
      name: "Semaglutide (GLP-1) Injection",
      path: "/product/semaglutide",
    },
    {
      id: 52,
      name: "Tirzepatide (GLP-2) Injection",
      path: "/product/tirzepatide",
    },
    { id: 32, name: "Tadalafil", path: "/product/tadalafil" },
    { id: 33, name: "Sildenafil", path: "/product/sildenafil" },
    { id: 27, name: "Dutasteride 0.5mg", path: "/product/dutasteride" },
    { id: 26, name: "Finasteride 1mg", path: "/product/finasteride" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`bg-neutral-primary fixed w-full z-50 top-0 start-0 transition-all duration-300 ${isScrolled ? "shadow-lg bg-[#1d2637f2]" : ""}`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse transition-transform duration-300 hover:scale-105"
          onClick={closeMenu}
        >
          <img src={Logo} className="" alt="Rizz Pharma Logo" />
        </Link>

        {/* Mobile Menu Button */}

        <div className="flex gap-3 items-center">
          <Link to="#" className="md:hidden  border-default block w-full py-2.5 px-4 text-center text-heading border border-default  font-semibold transition-all duration-300 hover:bg-neutral-tertiary rounded-full ">
            Sign Up
          </Link>



          <div className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>

          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-body rounded-lg md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-300 relative z-50"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${menuOpen ? "block relative z-50" : "hidden"} w-full md:block md:w-auto md:flex-col md:gap-2 `}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-lg bg-neutral-secondary-soft md:flex-row md:items-center md:mt-0 md:border-0 md:bg-transparent">
            {/* Home */}
            <li className="md:pr-8 lg:pr-10">
              <Link
                to="/"
                className="block font-neue py-2.5 px-4 text-white bg-brand rounded-lg md:bg-transparent md:text-fg-brand md:p-0 md:px-3 md:py-2 font-semibold transition-all duration-300 hover:bg-brand/90 md:hover:bg-transparent md:hover:text-brand md:hover:scale-105"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            {/* Category Dropdown */}
            <li
              className="relative group pr-[40px]"
              onMouseEnter={() => setCategoryOpen(true)}
              onMouseLeave={() => setCategoryOpen(false)}
            >
              <button
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex items-center justify-between font-neue text-[18px] w-full py-2.5 px-4 md:px-3 md:py-2 rounded-lg font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand transition-all duration-300 md:hover:scale-105"
              >
                Category
                <svg
                  className={`w-4 h-4 ms-2 transition-transform duration-300 ${categoryOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Category Dropdown Menu */}
              <div
                className={`${categoryOpen ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"} md:absolute md:left-0 mt-2 bg-neutral-primary-medium border border-default-medium rounded-lg shadow-xl w-full md:w-56 transition-all duration-300 md:group-hover:block bg-white`}
              >
                <ul className="p-2 text-sm font-medium">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        to="#"
                        className="block p-3 text-body hover:bg-neutral-tertiary-medium hover:text-fg-brand rounded-lg transition-all duration-200 hover:translate-x-1 text-black! text-left border-b border-gray-200 rounded-none"
                        onClick={closeMenu}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Top Products Dropdown */}
            <li
              className="relative group pr-[40px]"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center justify-between w-full font-neue text-[18px] py-2.5 px-4 md:px-3 md:py-2 rounded-lg font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand transition-all duration-300 md:hover:scale-105"
              >
                Top Products
                <svg
                  className={`w-4 h-4 ms-2 transition-transform duration-300 ${productOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Products Dropdown Menu */}
              <div
                className={`${productOpen ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"} md:absolute md:left-0 mt-2 bg-neutral-primary-medium border border-default-medium rounded-lg shadow-xl w-full md:w-56 transition-all duration-300 md:group-hover:block bg-white`}
              >
                <ul className="p-2 text-sm font-medium">
                  {topProducts.map((product) => (
                    <li key={product.id}>
                      <Link
                        to="#"
                        className="block p-3 text-body hover:bg-neutral-tertiary-medium hover:text-fg-brand rounded-lg transition-all duration-200 hover:translate-x-1 text-black! text-left border-b border-gray-200 rounded-none"
                        onClick={closeMenu}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Other Menu Items */}
            <li className="pr-[40px] text-left">
              <Link
                to="#"
                className="block py-2.5 px-4 md:px-3 md:py-2 text-heading rounded-lg hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand transition-all duration-300 md:hover:scale-105"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>

            <li className="pr-[40px] text-left">
              <Link
                to="#"
                className="block py-2.5 px-4 md:px-3 md:py-2 text-heading rounded-lg hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand transition-all duration-300 md:hover:scale-105"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>

            <li className="pr-[40px] text-left">
              <Link
                to="#"
                className="block py-2.5 px-4 md:px-3 md:py-2 text-heading rounded-lg hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand transition-all duration-300 md:hover:scale-105"
                onClick={closeMenu}
              >
                FAQ
              </Link>
            </li>

            {/* Social Media Icons - Show when NOT scrolled */}
            {/* {!isScrolled && ( */}
            <div className="flex items-center gap-2">
              <li>
                <Link
                  to="#"
                  className="block ml-0 py-2.5 px-4 md:px-3 md:py-2 text-heading rounded-lg hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand transition-all duration-300 md:hover:scale-105"
                >
                  <Instagram />
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="block py-2.5 px-4 md:px-3 md:py-2 text-heading rounded-lg hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand transition-all duration-300 md:hover:scale-105"
                >
                  <FacebookIcon />
                </Link>
              </li>
            </div>
            {/* // )} */}

            {/* Login Icon - Show when scrolled */}
            {isScrolled && (
              <div className="flex gap-2">
                <li>
                  <Link
                    to="#"
                    className="block py-2.5 px-4 md:px-3 md:py-2 text-heading rounded-lg hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand transition-all duration-300 md:hover:scale-105"
                    title="Log In"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="block relative py-2.5 px-4 md:px-3 md:py-2 text-heading rounded-lg hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand transition-all duration-300 md:hover:scale-105"
                    title="Log In"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="absolute -top-1 left-10 bg-brand text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center text-[#1F1F1F]">
                      0
                    </span>
                  </Link>
                </li>
              </div>
            )}

            {/* Mobile Only - Action Buttons */}
          </ul>

          {/* Desktop Action Buttons - Hide when scrolled */}
          <div
            className={`hidden md:flex md:items-center md:gap-8 md:ml-4 justify-end mt-6 transition-all duration-300 ${isScrolled ? "md:hidden" : ""}`}
          >
            <Link
              to="#"
              className="button-gradient transition-all duration-300 hover:scale-105"
            >
              <span className="py-2 px-6 text-heading rounded-full font-medium text-[#1F1F1F]">
                Sign Up
              </span>
            </Link>

            <Link
              to="#"
              className="py-2 px-6 text-heading border-2 border-default rounded-full font-semibold transition-all duration-300 hover:bg-neutral-tertiary hover:border-brand hover:text-fg-brand hover:scale-105"
            >
              <span className="">Log In</span>
            </Link>

            <Link
              to="#"
              className="relative p-2.5 text-heading rounded-full transition-all duration-300 hover:bg-neutral-tertiary hover:text-fg-brand hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-brand text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center text-[#1F1F1F]">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/90 md:hidden z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Header;
