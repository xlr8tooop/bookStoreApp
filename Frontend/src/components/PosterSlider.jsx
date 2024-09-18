import React from "react";
import "swiper/css"; // Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const PosterSlider = () => {
  // List of poster data with external image URLs
  const posters = [
    {
      img: "/school1.jpg",
      address: "Sonari, Jamshedpur",
    },
    {
      img: "/school2.jpg",
      address: "Sonari, Jamshedpur",
    },
    {
      img: "/school3.jpg",
      address: "Sonari, Jamshedpur",
    },
    {
      img: "/school4.jpg",
      address: "Sonari, Jamshedpur",
    },
    {
      img: "/school5.jpg",
      address: "Sonari, Jamshedpur",
    },
  ];

  // URL for the school's hosted website
  const schoolWebsite = "http://www.rmsbalichela.org/";

  return (
    <div className="w-full lg:w-1/4 p-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {posters.map((poster, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[250px] lg:h-[400px]">
              <img
                src={poster.img}
                alt={`School image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {/* Clicking on this will redirect to the school's website */}
                  <a
                    href={schoolWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    R.M.S. High School Balichela <br></br>
                    

                  </a>

                </h3>
                <h4>Affiliated to CISCE, Affiliation No- JH133</h4>
                <p className="text-sm lg:text-lg">{poster.address}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PosterSlider;
