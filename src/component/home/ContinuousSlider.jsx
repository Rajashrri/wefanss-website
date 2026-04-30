import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

export default function MarqueeSlider() {
  const slides = ["Explore All Celebrities", "Explore All Celebrities", "Explore All Celebrities","Explore All Celebrities", "Explore All Celebrities", "Explore All Celebrities", ];

  const loopSlides = [...slides, ...slides, ...slides];

  return (
    <>
    <div className="relative px-5 py-[30px] md:block hidden">
        <img
            src="/banner/banner.png"
            className='absolute top-0 h-full object-cover inset-0 w-full z-1'
            alt=""
          />

   
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView="auto"
      spaceBetween={40}
      loop={true}
      freeMode={true}
      freeModeMomentum={false}
      speed={9000} // higher = smoother slow flow
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
      className="marquee-swiper"
    >
      {loopSlides.map((text, i) => (
        <SwiperSlide key={i} className="!w-auto">
          <div className="berlin text-[#fff] md:text-[200px] text-[100px] whitespace-nowrap">
            {text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
     </div>
    </>
  );
}
