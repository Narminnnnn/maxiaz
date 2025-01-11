import React from "react";
import "./Header.css";
import { LuLayoutGrid } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { LiaBalanceScaleLeftSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <div className="contaierHeader">
        <div className="upHeader">
          <div className="logoNavbar">
            <div className="logo">
              <img
                src="https://aem-elektron.az/image/cache/webp/catalog/partners/maxi-az-logo-400x300.webp"
                alt=""
              />
            </div>
            <nav>
              <ul>
                <li className="aksiya">
                  <a href="">%Aksiya</a>
                </li>
                <li>
                  <a href="">Mağzalar və servis</a>
                </li>
                <li>
                  <a href="">Bloq</a>
                </li>
                <li>
                  <a href="">Haqqımızda</a>
                </li>
                <li>
                  <a href="">Vakansiyalar</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="contactHeader">
            <div className="callBack">
              <a href="">*0900</a>
            </div>
            <div className="callBack-info">
              <p className="callBack-info-message">Həftə içi beş gün </p>
              <p className="callBack-info-time">9:00-dan 18:00-dək</p>
            </div>
            <div className="lang">
              <a className="az" href="">
                AZ
              </a>
              <a href="">Ru</a>
            </div>
          </div>
        </div>
        <div className="downHeader">
          <div className="downContainer">
            <div className="searchKataloq">
              <div className="kataloq">
                <LuLayoutGrid className="grids" />
                <span className="mallar">Malların kataloqu </span>
              </div>
              <div className="searchContainer">
                <div className="searchDiv">
                  <input className="inp" type="text" placeholder="Axtarış" />
                  <CiSearch className="search" />
                </div>
              </div>
            </div>

            <div className="enter">
              <div className="hesab">
                <BsPersonCircle className="person"/>
                <span> Hesaba giriş</span>
              </div>

              <div className="terezi styleEnter">
                <LiaBalanceScaleLeftSolid className="scales" />
              </div>
              <div className="wishList styleEnter ">
                <FaRegHeart className="heart"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
