import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Slider = () => {
  const [datas, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        `http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10`
      )
      .then((res) => {
        setData(res.data.Items);
      });
  }, []);

  const buttonStyles = {
    top: "52rem",
    right: "52rem",
    backgroundColor: "transparent",
    fontSize: "20px",
    marginLeft: "10px",
  };

  const redColorStyle = {
    color: "#969FA8",
  };

  const handleSwiperSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <>
      <div className="mt-[10rem] mb-[2rem] flex justify-end mr-[2rem]">
        <span className="font-bold text-[#fd9460]">Add Items</span>
        <div className="swiper-button-prev" style={buttonStyles}>
          <button style={(currentIndex === 0 || currentIndex === datas.length - 1) ? redColorStyle : {}}>
            <FaChevronLeft />
          </button>
        </div>
        <div className="swiper-button-next" style={buttonStyles}>
          <button
            style={(currentIndex === datas.length - 4) ? redColorStyle : {}}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        spaceBetween={25}
        className="mySwiper"
        onSlideChange={(swiper) => handleSwiperSlideChange(swiper)}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {datas.map((data) => (
          <SwiperSlide key={data.Id}>
            <div>
              <img
                className="h-80 rounded-xl w-[17rem]"
                src={data.ImageUrl}
                alt="ImageUrl"
              />
              <h1 className="text-center">{data.Name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
