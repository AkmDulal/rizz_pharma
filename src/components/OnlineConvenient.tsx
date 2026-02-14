import React, { useEffect, useState } from 'react'
import ServiceBgImages from "@/assets/images/service.png"
import ServiceBgImagesMobile from "@/assets/images/service_m.png"
import { RightArrow } from "@/icon"
import { motion } from "motion/react"
import { slideUp, staggerContainer, fadeIn } from "@/lib/animations"

const OnlineConvenient: React.FC = () => {
    const [bgImage, setBgImage] = useState(ServiceBgImages)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setBgImage(ServiceBgImagesMobile)
            } else {
                setBgImage(ServiceBgImages)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div
            className="h-100 md:min-h-screen w-full bg-top bg-no-repeat md:bg-repeat-y md:bg-cover bg-contain"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="md:px-8 lg:px-32 px-4 py-8">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className='grid grid-cols-1 md:grid-cols-2 gap-4'
                >
                    <motion.div variants={fadeIn}>
                        <h3 className="text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight md:leading-[1.2] lg:leading-20 font-['Impact']">
                            100% Online, <br /> 100% Convenient
                        </h3>
                    </motion.div>

                    <motion.div variants={staggerContainer}>
                        <motion.div variants={slideUp} className='flex items-center gap-4 pb-2.5'>
                            <RightArrow />
                            <p className='text-[18px] text-white'>Chat with a provider 24/7</p>
                        </motion.div>

                        <motion.div variants={slideUp} className='flex items-center gap-4 pb-2.5'>
                            <RightArrow />
                            <p className='text-[18px] text-white'>Fast, discreet shipping</p>
                        </motion.div>

                        <motion.div variants={slideUp} className='flex items-center gap-4'>
                            <RightArrow />
                            <p className='text-[18px] text-white'>
                                Clinically proven ingredients and FDA-approved treatments.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default OnlineConvenient
