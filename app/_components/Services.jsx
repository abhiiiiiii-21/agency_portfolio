'use client';

import React, { useState } from 'react';
import ServiceStack from './_Services/ServiceStack';


const cards = [
    {
        id: 1,
        image: "/projects/image.png",
        link: "https://www.instagram.com/",
        alt: "Description 1",
    },
    {
        id: 2,
        image: "/projects/image.png",
        link: "https://www.google.com/",
        alt: "Description 2",
    },
    {
        id: 3,
        image: "/projects/image.png",
        link: "https://www.instagram.com/",
        alt: "Description 3",
    },
];


const Services = () => {

  return (
    <section className="w-full flex flex-col items-center mt-24 mb-96">
      <h1 className='font-urbanist text-[#3a86ff] text-[13rem] font-semibold'>
        Our Services
      </h1>

    </section>
  );
};

export default Services;