import { motion } from "motion/react";
import { slideUp, staggerContainer } from "@/lib/animations";
import { useEffect, useState } from "react";
import { fetchLandingCategories, type Category, BASE_URL } from "@/lib/api";

const ShopByCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchLandingCategories();
      setCategories(data);
      setLoading(false);
    };
    getCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto">
      {/* Category Grid - 3 columns layout matching the design */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="category-section"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-none md:grid-rows-[376px_44px_376px] gap-6 lg:gap-7.5">
          {categories.slice(0, 6).map((category, index) => {
            // Function to split the name into first and last/rest for visual styling
            // Some names come with /r/n, some might be long
            const displayName = category.QuizCategoryName || category.Category;
            const nameParts = displayName.split(/[\n\r/]+/);
            const firstName = nameParts[0].trim();
            const lastName = nameParts.slice(1).join(" ").trim();

            const imageUrl = category.CategoryPhotos?.startsWith("/")
              ? `${BASE_URL}${category.CategoryPhotos}`
              : category.CategoryPhotos || "";

            return (
              <motion.div
                key={category.CategoryId}
                variants={slideUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`
                  relative 
                  cursor-pointer 
                  rounded-[20px] sm:rounded-3xl 
                  overflow-hidden
                  group
                  h-75 sm:h-87.5 md:h-auto
                  ${index === 0 ? "md:col-start-1 md:row-start-1 md:row-span-2 min-h-100" : ""}
                  ${index === 1 ? "md:col-start-2 md:row-start-1 h-94" : ""}
                  ${index === 2 ? "md:col-start-3 md:row-start-1 md:row-span-2 min-h-100" : ""}
                  ${index === 3 ? "md:col-start-1 md:row-start-3 h-94" : ""}
                  ${index === 4 ? "md:col-start-2 md:row-start-2 md:row-span-2 min-h-100" : ""}
                  ${index === 5 ? "md:col-start-3 md:row-start-3 h-94" : ""}
                `}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={imageUrl}
                    alt={displayName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Title */}
                <div className="absolute text-left left-6 top-6 text-white text-2xl sm:text-3xl lg:text-[36px] leading-tight lg:leading-10.75 font-medium max-w-[150px] lg:max-w-45 z-10">
                  <p>{firstName}</p>
                  {lastName && <p>{lastName}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ShopByCategory;
