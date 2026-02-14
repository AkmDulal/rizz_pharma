import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import BgImg from "@/assets/images/bg_tetimonial.png"
import ProfileImg from "@/assets/images/profile.png"
import { motion } from "motion/react"
import { fadeIn, slideUp } from '@/lib/animations';

import { StareIcon, StarBlankIcon } from '@/icon';

const HaveToSay: React.FC = () => {
  return (
    <div className='md:py-25'>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mt-12 text-3xl sm:text-4xl md:text-[48px] font-bold text-center font-['Impact']"
      >
        <h3 className="pb-7.5 "> Hear What <span className="text_gold_gradient">Rizz</span> Patients Have To Say </h3>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={slideUp}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
          style={{
            paddingRight: window.innerWidth >= 1000 ? '120px' : '0',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ y: -5 }}
                className='text-[#222] text-left rounded-[15px] min-h-[300px] mb-10 p-5 bg-no-repeat bg-cover bg-center'
                style={{ backgroundImage: `url(${BgImg})` }}
              >
                <span className="text-white titleFont text-[30px] font-['Impact']"> " </span>
                <p className='text-white text-sm leading-relaxed'> I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Rizz my hair has grown, thickened, and darkened tremendously. </p>
                <div className='flex flex-col items-center py-5'>
                  <div className='flex gap-1'>
                    <StareIcon />
                    <StareIcon />
                    <StareIcon />
                    <StareIcon />
                    <StarBlankIcon />
                  </div>

                  <div className='flex gap-4 pt-5 items-center w-full justify-center'>
                    <img className='w-12 h-12 rounded-full overflow-hidden' src={ProfileImg} alt="profile" />
                    <div>
                      <h3 className='text-white font-bold text-[14px]'> John Williams </h3>
                      <h5 className='text-[#FFFFFF80] font-medium text-[12px]'> User </h5>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  )
}

export default HaveToSay;