import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/autoplay";

import banner1 from "../../assets/swiper-banner-2.jfif";
import banner2 from "../../assets/swiper-banner-4.png";
import banner3 from "../../assets/swiper-banner-5.png";

const banners = [banner1, banner2, banner3];

const BannerSlider = () => (
  <section className="relative">
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet !bg-white !opacity-50",
        bulletActiveClass:
          "swiper-pagination-bullet-active !bg-white !opacity-100",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="rounded-lg overflow-hidden shadow-xl"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="w-full h-64 sm:h-96 object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default BannerSlider;
