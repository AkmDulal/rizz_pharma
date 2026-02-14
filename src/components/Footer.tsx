import BrandImg from "@/assets/images/Brandinglogo.png";
import MaskLogoImg from "@/assets/images/masklogo.png";
import HimsImg from "@/assets/images/hims.png";

import { FalocationIcon, FacebIcon, InstagramIcon, MailIcon } from "@/icon";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { slideUp, fadeIn } from "@/lib/animations";

function Footer() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
      className="relative group w-full bg-linear-to-t from-[#1F1F1F1A] to-[#3D55CCB2]"
    >
      <div className="container mx-auto px-4 pt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <motion.div variants={slideUp}>
            <div className="border border-[#ffffff47] py-10 flex flex-col items-center justify-center rounded-[20px] bg-white/5 backdrop-blur-sm">
              <h1 className="w-full max-w-[400px] text-white flex items-center text-center leading-tight text-3xl sm:text-4xl md:text-[45px] font-[500]">
                Let’s Stay In Touch
              </h1>
              <p className="w-full max-w-[320px] px-4 text-white text-center text-base sm:text-[18px] pt-5 mb-3.75">
                Keep up to date with our latest news & special offers.
              </p>

              <div className="relative w-full max-w-[400px] px-6 sm:px-0 m-auto">
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#fff]">
                  <FalocationIcon />
                </div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full pl-5 pr-12 py-4 border border-white/20 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-[#43434329] placeholder-white text-white"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideUp} className="relative">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:width-[70%]">
              <div className="flex flex-col text-left">
                <h4 className="text-[13px] text-white/60 font-medium uppercase tracking-wider pb-5">
                  Quick Links
                </h4>
                <Link className="text-[16px] text-white pb-3 hover:text-yellow-400 transition-colors" to="#">
                  Erectile Dysfunction
                </Link>
                <Link className="text-[16px] text-white pb-3 hover:text-yellow-400 transition-colors" to="#">
                  Weight Loss
                </Link>
                <Link className="text-[16px] text-white pb-3 hover:text-yellow-400 transition-colors" to="#">
                  Men’s Hair Loss
                </Link>
                <Link className="text-[16px] text-white hover:text-yellow-400 transition-colors" to="#">
                  Solutions
                </Link>

                <div className="mt-8 md:mt-12">
                  <h4 className="text-white/60 text-[13px] font-medium uppercase tracking-wider pb-2">Contact Info</h4>
                  <div className="flex gap-3 items-center hover:text-yellow-400 transition-colors cursor-pointer group">
                    <MailIcon />
                    <p className="text-white text-[16px]">hello@rizzpharma.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col text-left">
                <h4 className="text-[13px] text-white/60 font-medium uppercase tracking-wider pb-5">
                  Our Company
                </h4>
                <Link className="text-[16px] text-white pb-3 hover:text-yellow-400 transition-colors" to="#">
                  HIPAA Notice
                </Link>
                <Link className="text-[16px] text-white pb-3 hover:text-yellow-400 transition-colors" to="#">
                  Privacy Policy
                </Link>
                <Link className="text-[16px] text-white pb-3 hover:text-yellow-400 transition-colors" to="#">
                  Return & Refund Policy
                </Link>
                <Link className="text-[16px] text-white pb-3 hover:text-yellow-400 transition-colors" to="#">
                  Terms Of Use
                </Link>
                <Link className="text-[16px] text-white pb-3 hover:text-yellow-400 transition-colors" to="#">
                  CCPA Opt-Out
                </Link>
                <Link className="text-[16px] text-white hover:text-yellow-400 transition-colors" to="#">
                  Opt-Out Preferences
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="pt-[20px]">
            <div className="w-full flex justify-center items-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={MaskLogoImg}
                alt="logo-mask"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col pt-[20px]">
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.div whileHover={{ y: -3 }} className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#434B76] cursor-pointer hover:bg-yellow-500 transition-colors group">
                <FacebIcon />
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#434B76] cursor-pointer hover:bg-yellow-500 transition-colors group">
                <InstagramIcon />
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center pt-8 border-t border-white/10 mt-8">
              <img src={HimsImg} alt="partner" className="h-8" />
              <p className="text-white/60 text-sm text-center md:text-left">
                Copyright © 2024 Rizz Pharma All Right Reserved - Built by
                Business Web Social
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full mt-10"
        src={BrandImg}
        alt="branding"
      />
    </motion.div>
  );
}

export default Footer;
