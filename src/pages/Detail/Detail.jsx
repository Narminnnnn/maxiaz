import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './detail.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { IoInformationCircleSharp } from 'react-icons/io5';
import { CiMoneyBill } from 'react-icons/ci';
import { FaManatSign } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import data from "../Products/Products";

const Detail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {id} = useParams();
    const [dataId, setDataId] = useState([]);

    useEffect(() => {
        const product = data.find((item) => item.id === parseInt(id));
        setDataId(product)
    }, [id])

   
    
    
    
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
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
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
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dataId.image} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="product-information">
                        <div className="up">
                            <div className="spanlar">
                                <span className='zemanet'>12 AY ZEMANET</span>
                                <span className='stok'>{dataId.availability}</span>
                                <span className='kod'>{dataId.id}</span>
                            </div>
                            <h2>{dataId.title}</h2>
                            <div className="stars">
                                {dataId.star}
                                <span className='rey'>rey: 0</span>
                            </div>
                        </div>
                        <div className="bottom">
                            <h3>{dataId.price}  <IoInformationCircleSharp className='information' />
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