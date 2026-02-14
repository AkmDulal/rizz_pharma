import { useState } from "react";
import { Search } from "lucide-react";
import ShopByCategory from "./ShopByCategory";
import { PaymentIcon, SupportIcon, ShippingIcon, BestValue } from "@/icon";
import { motion } from "motion/react";
import { slideUp, staggerContainer, fadeIn } from "@/lib/animations";

function Product() {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    {
      id: 1,
      title: "Weight Loss",
      gradient: "from-pink-400 via-rose-300 to-orange-300",
      size: "large",
      position: "col-span-1 row-span-2",
    },
    {
      id: 2,
      title: "Sexual Health",
      gradient: "from-orange-300 via-amber-200 to-yellow-200",
      size: "medium",
      position: "col-span-1 row-span-1",
    },
    {
      id: 3,
      title: "Brain Health",
      gradient: "from-purple-300 via-violet-200 to-indigo-200",
      size: "large",
      position: "col-span-1 row-span-2",
    },
    {
      id: 4,
      title: "Athletic Performance",
      gradient: "from-pink-300 via-rose-200 to-purple-200",
      size: "medium",
      position: "col-span-1 row-span-1",
    },
    {
      id: 5,
      title: "Testosterone HRT",
      gradient: "from-purple-500 via-violet-400 to-fuchsia-400",
      size: "large",
      position: "col-span-1 row-span-2",
    },
    {
      id: 6,
      title: "Beauty and Hair Loss",
      gradient: "from-cyan-300 via-blue-200 to-indigo-200",
      size: "medium",
      position: "col-span-1 row-span-1",
    },
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="md:-mt-67.5">
      <div className="relative z-10 lg:px-32 mx-auto px-4 py-12 md:py-20">
        {/* Search Bar */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideUp}
          className="max-w-md mx-auto relative -mt-32 sm:-mt-40 md:-mt-48 lg:-mt-56 z-20 mb-12 px-4 shadow-2xl"
        >
          <div className="relative group mt-40 md:mt-0">
            <div className="absolute inset-0 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative search_bg bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300">
              <div className="flex items-center px-6 py-4">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search by product/treatment"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-white placeholder-text-sm outline-none text-sm"
                />
              </div>
            </div>
          </div>
          {searchQuery && filteredCategories.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 mt-4 text-sm"
            >
              No results found for "
              <span className="text-yellow-400 font-bold">{searchQuery}</span>".
              Check the spelling or use a different word or phrase.
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 text-3xl sm:text-4xl md:text-[48px] font-bold text-center font-['Impact']"
        >
          <h3 className="pb-7.5">
            {" "}
            Shop by <span className="text_gold_gradient">Category</span>{" "}
          </h3>
        </motion.div>

        <ShopByCategory />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#31418C4D] py-16 px-4 md:px-12 lg:px-24"
      >
        {[
          { icon: <PaymentIcon />, text: "Secure Payment" },
          { icon: <SupportIcon />, text: "Online Support" },
          { icon: <ShippingIcon />, text: "Free Shipping" },
          { icon: <BestValue />, text: "Best Value" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={slideUp}
            className="flex items-center gap-4 justify-center"
          >
            {item.icon} <h4 className="text-white font-medium"> {item.text} </h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Product;
