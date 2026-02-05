'use client'
import React from 'react'
import { motion } from 'framer-motion'
import PricingTable from './_Pricing/PricingTable'

const Pricing = () => {
  return (
    <section className='flex items-center justify-center mt-10 sm:mt-14 md:mt-16 lg:mt-20 flex-col relative px-4 sm:px-6 md:px-8 lg:px-0'>

      <div className='flex flex-col justify-center relative z-0 gap-4'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[7rem] font-semibold tracking-tight font-urbanist text-center">
          <span className="text-white">
            Our <span className='font-dancing-script tracking-normal font-light'>Pricing</span>
          </span>
        </motion.h1>
      </div>

      <div className='absolute top-20 right-3 w-full hidden md:flex items-end justify-end mr-4 lg:mr-20 md:top-10'>
        <div className="flex flex-col items-center">
          <p className='font-dancing-script text-[#3a86ff] text-lg lg:text-2xl rotate-[-5deg]'>Value-Driven Plans</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 31 32"
            fill="none"
            className="w-10 h-10 lg:w-15 lg:h-15 text-[#3a86ff] mb-2 rotate-270">
            <path
              d="M-1.3266e-06 0.812487L1.24998 0.603613L1.62857 -0.000167918C1.45886 1.95803 4.50712 2.87186 5.21207 4.73215C5.42421 5.2935 4.76822 5.38815 4.56913 5.21191C4.52018 5.16948 4.33088 4.48411 3.92945 4.0631C3.5835 3.7041 2.02674 1.96782 1.63183 2.28114C2.1377 7.34635 3.34526 11.9905 5.93334 16.3998C11.2009 25.3846 20.7308 30.3095 30.9689 31.1385C15.8484 31.7782 2.73822 19.0694 1.29894 4.23934C0.443857 4.58202 1.35768 7.3594 -1.04856e-06 7.17337L-1.32646e-06 0.815748L-1.3266e-06 0.812487Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <PricingTable />

    </section>
  )
}

export default Pricing