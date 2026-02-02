"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import { Link000 } from '@/components/ui/skiper-ui/skiper40'
import BookCall from './_Footer/BookCall'
import { motion, useInView } from 'framer-motion'

const Footer = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { amount: 0.3, once: true })

    return (
        <div ref={containerRef} className='relative h-[600px]' style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className='fixed bottom-0 h-[650px] w-full'>
                <div className='relative h-full w-full'>
                    {/* Background Video */}
                    <video
                        src="/services/mesh.mp4"
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-50" />

                    {/* Content Overlay */}
                    <div className='relative z-10 h-full flex flex-col items-center justify-center text-white px-4 md:px-10 py-10'>


                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            className='flex flex-col items-center gap-4'>

                            <h1 className='text-6xl leading-[0.9] font-medium font-urbanist tracking-tight text-center'>
                                Let's build <span className='font-dancing-script text-6xl'>better!</span>
                            </h1>

                            {/* Subheading */}
                            <p className='text-lg md:text-xl text-white/50 mb-10 text-center max-w-lg font-urbanist'>
                                Tell us about your idea. We'll take care of the rest.
                            </p>
                        </motion.div>

                        {/* Actions */}
                        <div className='flex flex-col sm:flex-row gap-4 mb-20'>
                            <BookCall />
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className='absolute bottom-10 left-0 w-full px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 font-medium font-urbanist'>

                        <Link href="mailto:hello@agency.design" className='flex items-center gap-2 hover:text-white transition-colors cursor-pointer z-10'>
                            <span>hello@agency.design</span>
                        </Link>
                        <div className='flex gap-8 z-10'>
                            <Link000 href="" className="hover:text-white transition-colors cursor-pointer">Instagram</Link000>
                            <Link000 href="" className="hover:text-white transition-colors cursor-pointer">LinkedIn</Link000>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer