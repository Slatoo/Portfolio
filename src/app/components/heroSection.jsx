"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';

//"C:\Users\josem\OneDrive\Documents\work\practicas de prog\portfoliojm\portfoliojm\public\docs\JMCV.pdf"

const HeroSection = () => {

    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 lg:grid-cols-12'
            >
                <motion.div
                    className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold' >
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-700'>Hello Im {" "}</span>
                        <br />
                        <TypeAnimation
                            sequence={[

                                'Jose',
                                1000,
                                'Web Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
                        First solve the problem. Then write the code...<em>--John Johnson</em>
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 hover:bg-slate-300 text-white'>Hire me </button>
                        <button className='px-1  py-1 w-full sm:w-fit rounded-full mt-3 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 hover:bg-slate-800 text-white'>
                            <a
                                className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'
                                href="/JMCV.pdf"
                                download

                            >
                                Download CV
                            </a>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='lg:col-span-4 place-self-center mt-4 lg:mt-0'
                >
                    <div className='rounded-full bg-[#181818] w-[450px] h-[450px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/imageNoBG.png"
                            alt="Hero Image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}

                        />
                    </div>

                </motion.div>
            </div>
        </section >
    )
}

export default HeroSection