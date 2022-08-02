import { Slider } from "../../ui";
import { SwiperSlide } from "swiper/react";

const CustomersSlider = () => {
  return (
    <Slider variant="minimal">
      <SwiperSlide>
        <div>kekekeke</div>
      </SwiperSlide>
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>1</SwiperSlide>
    </Slider>
  );
};

export default CustomersSlider;
