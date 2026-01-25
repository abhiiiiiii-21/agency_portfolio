import { StickyCard002 } from '@/components/ui/skiper-ui/skiper17'
import React from 'react'

const cards = [
    {
        id: 1,
        image: "/Hero/2.jpg",
        alt: "Description 1",
    },
    {
        id: 2,
        image: "/Hero/2.jpg",
        alt: "Description 2",
    },
    {
        id: 3,
        image: "/Hero/2.jpg",
        alt: "Description 3",
    },
];

const RecentWorks = () => {
    return (
        <section className='flex items-center justify-center mt-30 mb-96 flex-col '>

            <div className='flex flex-col items-center justify-center relative z-0 gap-4'>
                <p className='font-light font-urbanist text-blue-700 text-3xl'>( <span className='font-dancing-script text-3xl'>curated projects</span> )</p>

                <h1 className="text-[13rem] font-semibold tracking-tight leading-none">
                    <span className="bg-linear-to-b from-black/20 to-white bg-clip-text text-transparent">
                        Recent Works
                    </span>
                </h1>
            </div>


            <div className='h-screen w-full relative z-10 -mt-38'>
                <StickyCard002 cards={cards} />
            </div>

        </section>
    )
}

export default RecentWorks