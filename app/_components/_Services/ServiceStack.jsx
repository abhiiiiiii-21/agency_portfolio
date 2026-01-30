import Image from 'next/image';
import React from 'react';

const services = [
  {
    title: "Website Development",
    description: "We build fast, scalable websites and applications that convert visitors into customers.",
    tags: ["MVP Development", "Landing Page", "Full Stack", "CMS / Admin Dashboards"],
    color: "#C3ABFF",
    textColor: "#1E1E1E",
    media: "/services/img1.jpg",
  },
  {
    title: "Brand Design",
    description: "We create distinctive brand identities that leave a lasting impression.",
    tags: ["Brand Identity", "Logo Design", "Visual Language", "Brand Guidelines"],
    color: "#FFFFFF",
    textColor: "#1E1E1E",
    media: "/services/img2.jpg",
  },
  {
    title: "Graphic Design",
    description: "We design bold visuals that capture attention and drive engagement.",
    tags: ["Logo Design", "Social Media Creatives", "Banner Design", "Poster Design", "YouTube Thumbnails"],
    color: "#FED35B",
    textColor: "#1E1E1E",
    media: "/services/img3.jpg",
  },
  {
    title: "Video Editing",
    description: "We craft compelling video edits that tell stories and keep viewers hooked.",
    tags: ["Short-Form Videos", "Long-Form Videos", "Promo Videos", "Motion Graphics"],
    color: "#1E1E1E",
    textColor: "#FFFFFF",
    media: "/services/img1.jpg",
  },
];

const ServiceStack = () => {
  return (
    <div className="w-full relative">
      {services.map((service, index) => (
        <div
          key={index}
          className="sticky flex flex-col justify-center items-center overflow-hidden"
          style={{
            backgroundColor: "#1E1E1E",
            color: "#FFFFFF",
            zIndex: index + 1,
            top: `${index * 120}px`,
            height: '500px',
          }}>
          <div className="w-full max-w-[90%] md:max-w-8xl mx-auto flex justify-between gap-10 md:gap-16 h-full box-border">
            <div className="flex flex-col justify-between h-full py-4 md:py-8">
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl md:text-[3rem] lg:text-[5rem] font-semibold leading-[0.9] tracking-tight font-urbanist">
                  {service.title}
                </h3>
              </div>

              <div className="flex flex-col gap-8 md:gap-12">
                <p className="text-lg md:text-2xl font-medium max-w-md leading-relaxed opacity-90">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm md:text-base border rounded-full uppercase tracking-wider font-medium"
                      style={{
                        borderColor:
                          service.textColor === "#FFFFFF"
                            ? "rgba(255,255,255,0.3)"
                            : "rgba(0,0,0,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Media */}
            <div className="flex items-center justify-center h-full py-8 md:py-12">
              <div className="w-[500px] h-[400px] relative overflow-hidden rounded-lg bg-black/5">
                {/* Placeholder for video/image */}
                <Image
                  width={500}
                  height={500}
                  src={service.media}
                  alt={service.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceStack;