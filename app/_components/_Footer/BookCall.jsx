import React from 'react'

const BookCall = () => {
    return (
        <button
            className="group relative flex items-center justify-between w-[150px] h-[44px] px-4 rounded-full bg-[#0B0B0B] hover:bg-[#3a86ff] text-white transition-colors duration-300 overflow-hidden cursor-pointer">
            {/* Text container */}
            <div className="relative h-5 overflow-hidden">
                <div className="flex flex-col">
                    <span
                        className="h-5 flex items-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full text-sm font-semibold font-urbanist">
                        Book a Call
                    </span>

                    <span
                        className="h-5 flex items-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full text-sm font-semibold font-urbanist">
                        Book a Call
                    </span>
                </div>
            </div>

            {/* Arrow circle */}
            <div
                className="absolute right-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1">
                <span className="text-sm text-blue-600">→</span>
            </div>
        </button>
    )
}

export default BookCall