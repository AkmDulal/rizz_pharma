import { motion } from "motion/react";
import { slideUp, staggerContainer } from "@/lib/animations";

const ShopByCategory = () => {
  interface Category {
    firstName: string;
    lastName: string;
    image: string;
  }

  const categories: Category[] = [
    {
      firstName: "Weight",
      lastName: "Loss",
      image:
        "https://rizzpharma.thrivewellrx.com/Portals/0/Images/category/category-6.png",
    },
    {
      firstName: "Sexual",
      lastName: "Health",
      image:
        "https://rizzpharma.thrivewellrx.com/Portals/0/Images/category/category-3.png",
    },
    {
      firstName: "Brain",
      lastName: "Health",
      image:
        "https://rizzpharma.thrivewellrx.com/Portals/0/Images/category/category-4.png",
    },
    {
      firstName: "Testosterone",
      lastName: "HRT",
      image:
        "https://rizzpharma.thrivewellrx.com/Portals/0/Images/category/category-2.png",
    },
    {
      firstName: "Athletic",
      lastName: "Performance",
      image:
        "https://rizzpharma.thrivewellrx.com/Portals/0/Images/category/category-5.png",
    },
    {
      firstName: "Beauty and Hair",
      lastName: "Loss",
      image:
        "https://rizzpharma.thrivewellrx.com/Portals/0/Images/category/category-1.png",
    },
  ];

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
          {categories.map((category, index) => (
            <motion.div
              key={index}
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
                  src={category.image}
                  alt={`${category.firstName} ${category.lastName}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Title */}
              <p className="absolute text-left left-6 top-6 text-white text-2xl sm:text-3xl lg:text-[36px] leading-tight lg:leading-10.75 font-medium max-w-[150px] lg:max-w-45 z-10">
                <span>{category.firstName}</span>
                <br />
                <span>{category.lastName}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ShopByCategory;
