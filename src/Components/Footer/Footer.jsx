import React from "react";
import "./Footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill, RiMastercardLine } from "react-icons/ri";
import { TbBrandVisa } from "react-icons/tb";
import { SiDatacamp } from "react-icons/si";
React;
const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="qrafik">
          <h2 className="call">*0900</h2>
          <p>Həftə içi beş gün </p>
          <p>9:00-dan 18:00-dək </p>
          <div className="logos">
            <a className="ytb"
              target="blank"
              href="https://www.youtube.com/channel/UCxsIp50sKMQ-nmQVhUaFlsQ"
            >
              <FaYoutube />
            </a>
            <a
              className="fb"
              target="blank"
              href="https://www.facebook.com/maxi.az.shop/"
            >
              <FaFacebookF />
            </a>
            <a
              className="ins"
              target="blank"
              href="https://www.instagram.com/maxiaz.shop/"
            >
              <RiInstagramFill />
            </a>
          </div>
        </div>
        <div className="navbar">
          <h5>
            <a href="">MALLARIN KATEQORİYASI</a>
          </h5>
          <ul>
            <li>
              <a href="">MAXİ endirimlər</a>
            </li>
            <li>
              <a href="">Azercell</a>
            </li>
            <li>
              <a href="">Telefonlar, planşetlәr və qadcetlər</a>
            </li>
            <li>
              <a href="">TV və Audio</a>
            </li>
            <li>
              <a href="">Mәişәt texnikası</a>
            </li>
            <li>
              <a href="">Rəqəmsal texnika</a>
            </li>
            <li>
              <a href="">Əyləncə və istirahət</a>
            </li>
            <li>
              <a href="">Foto və video</a>
            </li>
            <li>
              <a href="">Alətlər və digər avadanlıq</a>
            </li>
            <li>
              <a href="">Tərz və aksesuarlar</a>
            </li>
            <li>
              <a href="">Uşaqlar və analar</a>
            </li>
            <li>
              <a href="">Avtomobil üçün</a>
            </li>
            <li>
              <a href="">Sağlamlıq və gözəllik</a>
            </li>
            <li>
              <a href="">Ev və bağ</a>
            </li>
            <li>
              <a href="">Dəftərxana, məktəb və ofis</a>
            </li>
            <li>
              <a href="">İçkilər və qida</a>
            </li>
            <li>
              <a href="">Heyvanat aləmi</a>
            </li>
            <li>
              <a href="">OUTLET</a>
            </li>
          </ul>
        </div>
        <div className="alici">
          <h5>
            <a href="">ALICIYA KÖMƏK</a>
          </h5>
          <ul>
            <li>
              <a href="">Məxfilik siyasəti</a>
            </li>
            <li>
              <a href="">Kontaklar</a>
            </li>
            <li>
              <a href="">Korporativ satislar</a>
            </li>
          </ul>
        </div>
        <div className="alici">
          <h5>
            <a href="">Şәxsi kabinet</a>
          </h5>
          <ul>
            <li>
              <a href="">Şәxsi mәlumat</a>
            </li>
            <li>
              <a href="">Sifarişlərin tarixi</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="downFooter">
        <div className="maxi">
          <p className="allRight styleFootertext">
            © 2025 Maxi.az All Rights Reserved
          </p>
        </div>
        <div className="inteqral">
          <img
            src="https://maxi.az/local/templates/main/images/integral.png"
            alt=""
          />
          <span className="styleFootertext"> Owned by İntegral</span>
        </div>
        <div className="master">
          <RiMastercardLine className="visas" />
          <TbBrandVisa className="visa" />
        </div>
        <div className="devo">
          <a
            target="blank"
            className="styleFootertext"
            href="https://www.aniart.com.ua/"
          >
            Development by <br /> AniArt
          </a>
        </div>
        <div className="uxui">
          <a target="blank" href="https://sense.pro/">
            <SiDatacamp className="ux" />
          </a>
          <span className="styleFootertext">
            UX/UI design by <br />
            Sense Production
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
