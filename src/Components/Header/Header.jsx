import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="contaierHeader">
        <div className="upHeader">
            <div className="logo">
                <img src="https://aem-elektron.az/image/cache/webp/catalog/partners/maxi-az-logo-400x300.webp" alt="" />
            </div>
            <nav>
                <ul>
                    <li className='aksiya'><a href="">%Aksiya</a></li>
                    <li><a href="">Mağzalar və servis</a></li>
                    <li><a href="">Bloq</a></li>
                    <li><a href="">Haqqımızda</a></li>
                    <li><a href="">Vakansiyalar</a></li>
                </ul>
            </nav>
            <div className="contactHeader">
                <div className="callBack"><a href="">*0900</a></div>
                <div className="callBack-info">
                    <span className='callBack-info-message'>Həftə içi beş gün </span>
                    <span className='callBack-info-time'>9:00-dan 18:00-dək</span>
                </div>
                <div className="lang">
                    <a href="">AZ</a>
                    <a href="">Ru</a>
                </div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
