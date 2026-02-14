import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CartIcon } from "@/icon";
import { motion, AnimatePresence } from "motion/react";
import { staggerContainer, fadeIn } from "@/lib/animations";

const SolutionsHealth = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [visibleTabsStart, setVisibleTabsStart] = useState(0);
    const [currentProductPage, setCurrentProductPage] = useState(0);
    const tabsContainerRef = useRef<HTMLDivElement>(null);

    const tabs = [
        "All",
        "Best Selling Products",
        "Weight Loss",
        "Beauty And Hair Loss",
        "Testosterone/HRT",
        "Sexual Health",
        "Brain Health",
    ];

    const VISIBLE_TABS = 6;
    const PRODUCTS_PER_PAGE = 8;

    interface Product {
        id: number;
        name: string;
        price: string;
        image: string;
        category: string;
        badge?: string;
        badgeColor?: string;
        outOfStock?: boolean;
        labCharge?: string;
    }

    const allProducts: Product[] = [
        // Weight Loss Products
        {
            id: 1,
            name: "Retarutide",
            price: "$26.99/per month",
            image: "./images/c1.png",
            category: "Weight Loss",
            badge: "Research use only",
            badgeColor: "bg-orange-500",
        },
        {
            id: 3,
            name: "Compounded Semaglutide 15mg",
            price: "$39.99/per month",
            image: "./images/c2.png",
            category: "Weight Loss",
            badge: "Recurring Plan",
            badgeColor: "bg-purple-600",
        },
        // Beauty And Hair Loss Products
        {
            id: 2,
            name: "Lyophilized Glow (GHK-CU/ BPC-157/ TB-500)",
            price: "$39.99/per month",
            image: "./images/c3.png",
            category: "Beauty And Hair Loss",
            badge: "Research use only",
            badgeColor: "bg-orange-500",
        },
        {
            id: 6,
            name: "Lyophilized F1 nasteride 1mg",
            price: "$39.99/per month",
            image: "./images/c4.png",
            category: "Beauty And Hair Loss",
        },
        // Testosterone/HRT Products
        {
            id: 4,
            name: "2X CJC / Ipamorelin",
            price: "$29.99/per month",
            image: "./images/c5.png",
            category: "Testosterone/HRT",
        },
        {
            id: 5,
            name: "Lyophilized Oxytocin",
            price: "$149 s.s. $65 physician consult",
            image: "./images/c6.png",
            category: "Testosterone/HRT",
            badge: "Recurring Plan",
            badgeColor: "bg-purple-600",
            outOfStock: true,
            labCharge: "$149 s.s. $65 physician consult",
        },
        // Sexual Health Products
        {
            id: 7,
            name: "Compounded NAD+ 1000 mg",
            price: "$39.99/per month",
            image: "./images/c7.png",
            category: "Sexual Health",
            badge: "Recurring Plan",
            badgeColor: "bg-purple-600",
        },
        {
            id: 8,
            name: "Lyophilized PT-141 10mg",
            price: "$29.99/per month",
            image: "./images/c1.png",
            category: "Sexual Health",
            badge: "Recurring Plan",
            badgeColor: "bg-purple-600",
        },
        // Brain Health Products
        {
            id: 9,
            name: "Nootropic Blend",
            price: "$34.99/per month",
            image: "./images/c2.png",
            category: "Brain Health",
            badge: "Best Seller",
            badgeColor: "bg-green-500",
        },
        {
            id: 10,
            name: "Memory Support Plus",
            price: "$44.99/per month",
            image: "./images/c1.png",
            category: "Brain Health",
        },
        // Best Selling Products
        {
            id: 11,
            name: "Premium Bundle",
            price: "$99.99/per month",
            image: "./images/c3.png",
            category: "Best Selling Products",
            badge: "Best Seller",
            badgeColor: "bg-green-500",
        },
        {
            id: 12,
            name: "Starter Pack",
            price: "$49.99/per month",
            image: "./images/c4.png",
            category: "Best Selling Products",
            badge: "Popular",
            badgeColor: "bg-blue-500",
        },
        // Additional products for pagination demo
        {
            id: 13,
            name: "Advanced Formula X",
            price: "$54.99/per month",
            image: "./images/c5.png",
            category: "Weight Loss",
        },
        {
            id: 14,
            name: "Elite Compound",
            price: "$64.99/per month",
            image: "./images/c6.png",
            category: "Testosterone/HRT",
        },
        {
            id: 15,
            name: "Pro Recovery",
            price: "$39.99/per month",
            image: "./images/c7.png",
            category: "Sexual Health",
        },
        {
            id: 16,
            name: "Ultra Boost",
            price: "$49.99/per month",
            image: "./images/c8.png",
            category: "Brain Health",
        },
    ];

    // Filter products based on active tab
    const filteredProducts =
        activeTab === "All"
            ? allProducts
            : allProducts.filter((product) => product.category === activeTab);

    // Calculate total pages for products
    const totalProductPages = Math.ceil(
        filteredProducts.length / PRODUCTS_PER_PAGE,
    );

    // Get current page products
    const currentProducts = filteredProducts.slice(
        currentProductPage * PRODUCTS_PER_PAGE,
        (currentProductPage + 1) * PRODUCTS_PER_PAGE,
    );

    // Handle tab navigation
    const handleNextTabs = () => {
        if (visibleTabsStart + VISIBLE_TABS < tabs.length) {
            setVisibleTabsStart((prev) => prev + 1);
        }
    };

    const handlePrevTabs = () => {
        if (visibleTabsStart > 0) {
            setVisibleTabsStart((prev) => prev - 1);
        }
    };

    // Handle product carousel navigation
    const handleNextProducts = () => {
        if (currentProductPage < totalProductPages - 1) {
            setCurrentProductPage((prev) => prev + 1);
        }
    };

    const handlePrevProducts = () => {
        if (currentProductPage > 0) {
            setCurrentProductPage((prev) => prev - 1);
        }
    };

    // Handle tab click
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setCurrentProductPage(0); // Reset to first page when changing tabs
    };

    // Get visible tabs
    const visibleTabs = tabs.slice(
        visibleTabsStart,
        visibleTabsStart + VISIBLE_TABS,
    );
    const hasMoreTabs = tabs.length > VISIBLE_TABS;

    return (
        <div className="bg-linear-to-br from-gray-900 via-purple-900/20 to-gray-900 min-h-screen py-16 px-4">
            <div className="lg:px-32 mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mt-12 text-3xl sm:text-4xl md:text-[48px] font-bold text-center font-['Impact']"
                >
                    <h3 className="pb-7.5 ">
                        {" "}
                        Solutions For Your{" "}
                        <span className="text_gold_gradient">Unique</span> Health Goals{" "}
                    </h3>
                </motion.div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="flex items-center gap-3 mb-12"
                >
                    {hasMoreTabs && visibleTabsStart > 0 && (
                        <button
                            onClick={handlePrevTabs}
                            className="p-3 bg-gray-800/50 rounded-full border border-gray-700 text-white hover:bg-gray-700/50 transition-all flex-shrink-0"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )}

                    <div
                        ref={tabsContainerRef}
                        className="flex gap-3 overflow-hidden flex-1"
                    >
                        <div className="flex gap-3 transition-transform duration-500 ease-in-out">
                            {visibleTabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTabClick(tab)}
                                    className={`
                    px-4 md:px-6 py-2 md:py-3 rounded-full border-white whitespace-nowrap text-base md:text-[18px] font-medium transition-all shrink-0
                    ${activeTab === tab
                                            ? "bg-yellow-500 text-gray-900"
                                            : " bg-transparent text-white hover:bg-gray-700/50 border border-gray-700 cursor-pointer"
                                        }
                  `}
                                >
                                    {tab}
                                </button>
                            ))}

                            {hasMoreTabs && visibleTabsStart + VISIBLE_TABS < tabs.length && (
                                <button
                                    onClick={handleNextTabs}
                                    className="p-3 rounded-full w-15 border border-white text-white hover:bg-gray-700/50 transition-all shrink-0 cursor-pointer items-center flex justify-center"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Products Grid */}
                <div className="mb-8">
                    <motion.div
                        layout
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {currentProducts.map((product) => (
                                <motion.div
                                    layout
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ y: -8 }}
                                    className="group bg-[#31418C4D] cursor-pointer rounded-[20px] shadow-lg relative min-h-[280px] sm:min-h-[300px] flex flex-col overflow-hidden"
                                >
                                    {product?.badge && (
                                        <motion.h3
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            className={`absolute text-white rounded-bl-[20px] rounded-tr-[20px] top-0 right-0 px-6 py-2 z-10 ${product?.badge === 'Recurring Plan' ? 'bg-linear-to-b from-[#6C221D]/30 to-[#954139]/30' : 'bg-linear-to-r from-[#A75356] to-[#D78C6C]'}`}
                                        >
                                            {product?.badge}
                                        </motion.h3>
                                    )}

                                    <div className="flex items-center p-4 sm:p-5 flex-1">
                                        <motion.img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-20 sm:w-25 object-cover rounded-md transition-all duration-400 ease-in-out group-hover:scale-125 group-hover:-rotate-5"
                                        />
                                        <h3 className="mt-2 text-left font-semibold flex-1 bg-linear-to-b from-[#C1842D] to-[#ECC974] bg-clip-text text-transparent pl-3 text-sm sm:text-base">
                                            {product.name}
                                        </h3>
                                    </div>
                                    <div className="flex bg-[#1F1F1F4D] absolute bottom-0 w-full items-center">
                                        <p className="w-[70%] px-5 text-[15px] text-white"> {product.price}</p>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-linear-to-r from-[#DB5095] to-[#1945E8] w-[30%] flex items-center justify-center h-15 rounded-br-[10px]"
                                        >
                                            <CartIcon />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* No products message */}
                    <AnimatePresence>
                        {currentProducts.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-12 text-gray-400"
                            >
                                <p className="text-xl">No products found in this category</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Product Navigation Arrows */}
                {filteredProducts.length > PRODUCTS_PER_PAGE && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center gap-4"
                    >
                        <button
                            onClick={handlePrevProducts}
                            disabled={currentProductPage === 0}
                            className={`p-4 rounded-full transition-all ${currentProductPage === 0
                                ? "bg-gray-700 cursor-not-allowed opacity-50"
                                : "bg-yellow-500 hover:bg-yellow-400"
                                }`}
                        >
                            <ChevronLeft size={24} className="text-gray-900" />
                        </button>

                        {/* Page indicator */}
                        <div className="flex items-center gap-2 px-4">
                            {Array.from({ length: totalProductPages }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-2 rounded-full transition-all ${index === currentProductPage
                                        ? "w-8 bg-yellow-500"
                                        : "w-2 bg-gray-600"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNextProducts}
                            disabled={currentProductPage === totalProductPages - 1}
                            className={`p-4 rounded-full transition-all ${currentProductPage === totalProductPages - 1
                                ? "bg-gray-700 cursor-not-allowed opacity-50"
                                : "bg-yellow-500 hover:bg-yellow-400"
                                }`}
                        >
                            <ChevronRight size={24} className="text-gray-900" />
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default SolutionsHealth;
