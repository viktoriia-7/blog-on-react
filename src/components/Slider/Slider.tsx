import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import './Slider.scss'
import slide1 from 'assets/slider-images/slide_1.jpg'
import slide2 from 'assets/slider-images/slide_2.jpg'
import slide3 from 'assets/slider-images/slide_3.jpg'
import slide4 from 'assets/slider-images/slide_4.jpg'
import slide5 from 'assets/slider-images/slide_5.jpg'

type Props = {}

const Slider = (props: Props) => {
    const images = [slide1, slide2, slide3, slide4, slide5]

    const goPrev = () => {
        if (swiper) swiper.slidePrev()
    }

    const goNext = () => {
        if (swiper) swiper.slideNext()
    }

    let swiper: any = null

    const onSwiper = (instance: any) => {
        swiper = instance
    }

    return (
        <div className="slider-container">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                onSwiper={onSwiper}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="slider-arrows">
                <button className="prev-arrow" onClick={goPrev}>
                    &lt;
                </button>
                <button className="next-arrow" onClick={goNext}>
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default Slider
