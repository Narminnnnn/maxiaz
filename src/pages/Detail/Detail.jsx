import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FaStar } from "react-icons/fa";
import './detail.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { IoInformationCircleSharp } from 'react-icons/io5';
import { CiMoneyBill } from 'react-icons/ci';
import { FaManatSign } from 'react-icons/fa6';

const Detail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className="page-product-detail">
                <div className="containerDetail">
                    <div className="product-slider">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="product-information">
                        <div className="up">
                            <div className="spanlar">
                                <span className='zemanet'>12 AY ZEMANET</span>
                                <span className='stok'>STOKDA VAR</span>
                                <span className='kod'>Malin kodu: IN000060898</span>
                            </div>
                            <h2>Smartfon Tecno Phantom Flip V 5G 8GB 256GB NFC Mystic Dawn</h2>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span className='rey'>rey: 0</span>
                            </div>
                        </div>
                        <div className="bottom">
                            <h3>1480 <FaManatSign className='manat' /> <IoInformationCircleSharp className='information' />
                                <div className="ihover">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae assumenda voluptates eveniet, consequuntur</p>
                                </div> </h3>

                            <div className="zemanet">
                                <CiMoneyBill /> <span className='quaranty'>Zemanat</span>
                            </div>
                            <p className='resmi'>Rəsmi zəmanət. Qaytarma və dəyişdirmə - “İstehlakçıların hüquqlarının müdafiəsi haqqında” Azərbaycan Respublikası Qanununun 15-ci maddəsinə əsasən</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail