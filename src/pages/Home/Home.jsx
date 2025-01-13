import React, { useEffect, useState } from "react";
import "./Home.css";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { FaCar, FaHeart, FaLongArrowAltRight, FaTv } from "react-icons/fa";
import {
  GiDelicatePerfume,
  GiDrill,
  GiLipstick,
  GiPhotoCamera,
} from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuCirclePercent, LuSmartphone } from "react-icons/lu";
import {
  PiArmchair,
  PiCat,
  PiNotebook,
  PiSealPercentFill,
  PiWineBold,
} from "react-icons/pi";
import { RiBearSmileFill } from "react-icons/ri";
import { SiMeta } from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import data from "../Products/Products";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [page, setPage]=useState(1)
  const limit =3;
  useEffect(() => {
    const start = (page - 1) * limit;
    const end = page * limit;
    setProducts(data.slice(0, end)); 
  }, [page]);
  
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }
  return (
    <>
      <section className="sectionOne">
        <div className="secOneContainer">
          <aside>
            <div className="nav">
              <ul>
                <li>
                  <a href="">
                    <LuCirclePercent />
                    MAXİ endirimlər
                  </a>
                </li>
                <li>
                  <a href="">
                    <SiMeta />
                    Azercell
                  </a>
                </li>
                <li>
                  <a href="">
                    <LuSmartphone />
                    Telefonlar, planşetlәr və qadcetlər
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTv />
                    TV və Audio
                  </a>
                </li>
                <li>
                  <a href="">
                    <CgSmartHomeWashMachine />
                    Mәişәt texnikası
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <GrPersonalComputer />
                    Rəqəmsal texnika
                  </a>
                </li>
                <li>
                  <a href="">
                    <IoGameControllerOutline />
                    Əyləncə və istirahət
                  </a>
                </li>
                <li>
                  <a href="">
                    <GiPhotoCamera />
                    Foto və video
                  </a>
                </li>
                <li>
                  <a href="">
                    <GiDrill />
                    Alətlər və digər avadanlıq
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <GiDelicatePerfume />
                    Tərz və aksesuarlar
                  </a>
                </li>
                <li>
                  <a href="">
                    <RiBearSmileFill />
                    Uşaqlar və analar
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaCar />
                    Avtomobil üçün
                  </a>
                </li>
                <li>
                  <a href="">
                    <GiLipstick /> Sağlamlıq və gözəllik
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <PiArmchair />
                    Ev və bağ
                  </a>
                </li>
                <li>
                  <a href="">
                    <PiNotebook />
                    Dəftərxana, məktəb və ofis
                  </a>
                </li>
                <li>
                  <a href="">
                    <PiWineBold />
                    İçkilər və qida
                  </a>
                </li>
                <li>
                  <a href="">
                    <PiCat />
                    Heyvanat aləmi
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <PiSealPercentFill />
                    OUTLET
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/f77/po136c7t7wy9xlv4fbvh6x2ex7nqplqb/q100-photo1705408625-_1_.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/46d/7u4gjcsf14gse2gqznb6rl3og0qwtx9u/q100-photo1705471047-_1_.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/91d/9hx0xeuxfsl8zt2ocxxitcvpfl9nb071/q100-photo1705408625.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/e82/00jtedeiob61sc88pifhiocd58qgv2nh/q100-maxi3.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/8cb/admxpuwy5gjlm6jrxa37tbj8ez0bdt5c/q100-maxi2.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/b75/31jo7iuv8y1vg9krcrpcdzh65yktuvcq/q100-maxi5.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/2e8/vlw6ee7mtnrwok8v51c5fzxnw8n62hda/q100-maxi4.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/009/p9do65mmwg0wjkw2z00m7p1h77zrgrli/q100-maxi-rus2.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/fd5/h16280uhzykfxiezh1tocnl48gfzgh1u/q100-maxi-rus-3.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/b85/d1i3rzhoo5345g01itkjflrqsrs5oeqm/q100-maxi-rus-1.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/ed5/flcgyrab2nkriptxqmap7s3xst0zz374/q100-photo1695899796.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/8fa/yrcnmb7fj4hfhwp9hr0cigq4tailzc12/q100-galaxy_z_flip5_z_fold5_main_kv_az_906x502.webp"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="sectionTwo">
        <div className="secTwoContainer">
          <div className="partSecTwo">
            <div className="textTwo">
              <h2 className="bb">B2B satışlar</h2>
              <p className="korporativ">Korporativ sifarişlər etmək imkanı</p>
            </div>
            <div className="imgTwoSec">
              <a href="/deliver">
                <img
                  src="https://maxi.az/upload/resize_cache/webp/iblock/0af/k1bo9fnbjse9yfxy5le1bq1kfvnzkdk4/317x132q100-bike.webp"
                  alt=""
                />{" "}
              </a>
            </div>
          </div>
          <div className="partSecTwo">
            <div className="textTwo">
              <h2 className="bb">zəmanətlər</h2>
              <p className="korporativ">istehsalçıdan rəsmmi zəmanət</p>
            </div>
            <div className="imgTwoSec">
              <a href="./about">
                {" "}
                <img
                  src="https://maxi.az/upload/resize_cache/webp/iblock/572/hkxpjr13x45n530aex3v99818lr633ut/317x132q100-disk.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="partSecTwo">
            <div className="textTwo">
              <h2 className="bb">Sərfəli təkliflər</h2>
              <p className="korporativ">
                sayıtda müntəzəm olaraq sərfəli təkliflər
              </p>
            </div>
            <div className="imgTwoSec">
              <a href=""></a>{" "}
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/19f/4y5exel4ko50q4r34g4bmi3x1lil61jd/317x132q100-darts.webp"
                alt=""
              />
            </div>
          </div>
          <div className="partSecTwo">
            <div className="textTwo">
              <h2 className="bb">Güvən kart</h2>
              <p className="korporativ">
                daha etibarlı zəmanət, daha keyfiyyətli imkanlar
              </p>
            </div>
            <div className="imgTwoSec">
              <a href="./">
                {" "}
                <img
                  src="https://maxi.az/upload/resize_cache/webp/iblock/cfa/m76x1o9jvwf6rku6dqmivrh3icmjx7bk/317x132q100-horn.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionthree">
        <div className="bashliqlar">
          <h1>Yenilik</h1>
          <span>Hamisini bax</span>
        </div>
        <div className="containerthree">
          <div className="productboxes">
            {products.map((product) => (
              <div className="productbox" key={product.id}>
                <div className="prImage">
                  <FaHeart className="heartIcon" />

                  <img src={product.image} alt={product.title} />
                </div>
                <div className="spans">
                  {product.isNew && <span>Yenilik</span>}
                  {product.availability ? (
                    <span>Mövcuddur</span>
                  ) : (
                    <span>Mövcud deyil</span>
                  )}
                </div>
                <h3>{product.title}</h3>
                <div className="priceDetail">
                  <h2>{product.price}</h2>
                  <button onClick={() => navigate(`/detail/${product.id}`)} className="detaill">Get Detail</button>
                </div>
              </div>
            ))}
          </div>
          <button className="more" onClick={loadMore}> More than</button>
        </div>
      </section>
      <section className="sectionfour">
        <div className="containerfour">
          <div className="brands">
            <div className="brand">
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/7be/9qgwsy1308itnq8w5o5et1sgvydk6gnc/195x50q100-Samsung_logo_blue.webp"
                alt=""
              />
            </div>
            <div className="brand">
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/38f/meewqhqzpa9ngthtv7q3pnhtv0bkcrz1/195x50q100-apple.webp"
                alt=""
              />
            </div>
            <div className="brand">
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/f64/750e2prtvcnj6w34hrc0dejf4frazp74/195x50q100-Xiaomi_logo_2021_.svg.webp"
                alt=""
              />
            </div>
            <div className="brand">
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/3ce/m4arasf1le0zoy8xnbkvdydqt46fzmzf/195x50q100-unnamed.webp"
                alt=""
              />
            </div>
            <div className="brand">
              <img
                src="https://maxi.az/upload/resize_cache/webp/iblock/a76/8623qg7p1oq2zuwpjp7pp7owo3uyj7z2/195x50q100-logo_1_-_1_.webp"
                alt=""
              />
            </div>
            <div className="brand">
              <span className="butun">Butun Brendler</span>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </section>
      <section className="sectionfive">
        <div className="containerfive"></div>
      </section>
    </>
  );
};

export default Home;
