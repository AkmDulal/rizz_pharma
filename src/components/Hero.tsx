import heroImg from "@/assets/images/Image.png";
import heroImg_movile from "@/assets/images/Image_m.png";
import FrameImg from "@/assets/images/group.svg";
import Header from "./Header";
import { motion } from "motion/react";
import { staggerContainer, slideUp } from "@/lib/animations";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Hero() {
  return (
    <section className="relative">
      <Header />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="absolute z-10 md:text-left ml-[20%] md:ml-0 md:left-0  top-[80%] w-85 m-auto md:top-[22%] px-4 py-3 md:px-12 lg:px-24 md:w-175 font-['Impact'] leading-[1.1] md:leading-[1.2]"
      >
        <motion.span
          variants={slideUp}
          className="text-[36px] sm:text-5xl md:text-6xl lg:text-[80px] block"
        >
          Prescription treatments for your
        </motion.span>

        <motion.div
          variants={slideUp}
          className="md:text-left py-3 w-full max-w-225 font-['Impact'] leading-0 md:leading-[1.2] hero__title_gradient"
        >
          <TypewriterEffect
            className="text-left"
            words={[
              {
                text: "health goals",
                className: "text-4xl sm:text-5xl md:text-6xl lg:text-[80px]",
              },
            ]}
          />
        </motion.div>
        <motion.button
          variants={slideUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero_button mt-4 sm:mt-6"
        >
          <span className="font-neue! text-sm sm:text-base md:text-lg ">
            {" "}
            Find my treatment{" "}
          </span>
        </motion.button>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden md:block w-full h-full object-cover"
        src={heroImg}
        alt="Hero Desktop"
      />

      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="block md:hidden w-full h-full object-cover"
        src={heroImg_movile}
        alt="Hero Mobile"
      />

      <img
        className="w-full! h-full object-cover absolute top-0 left-0"
        src={FrameImg}
        alt=""
      />
    </section>
  );
}
