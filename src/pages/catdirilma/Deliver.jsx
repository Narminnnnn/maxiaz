import React from "react";
import "./Deliver.css"
import { IoIosArrowForward } from "react-icons/io";

const Deliver = () => {
  return (
    <section className="secDeliver">
      <div className="homePage">
        <a href="./">Ana Sehife</a>
        <span >
          <IoIosArrowForward /> Catdirilma ve odenis
        </span>
      </div>
      <h2 className="catdirilma"> ÇATDIRILMA İMKANLARI </h2>
      <div className="textContainerDeliver">
       
        <div className="partDeliver">
          <div className="firstPart">
          <h2 className="titleDeliver"> KURYERLƏ</h2>
          <span className="gray">HARADA</span>
          <p> Bakı və Sumqayıt</p>
          <span className="gray">NƏ ZAMAN</span>
          <p>Növbəti gün 09:00-19:00 sifariş ücün Şənbə və Bazar</p>
          <span className="gray">QİYMƏT </span>
          <p className="green">Pulsuz</p>
          <span>3₼</span>
          </div>
          <div className="secondPart">
            <p className="gray">ƏLAVƏ</p>
            <p className="textStyle">Sifarişlərin sayından asılı olaraq, çatdırılma həmin gün də baş tuta bilər. Ekspress çatdırılma (sifariş günü çatdırılma) xidməti üçün sifarişləri bazar günləri səhər saat 9:00-dan 18:00-dək qəbul edir.</p>
          </div>
        </div>
        <div className="partDeliver">
          <div className="firstPart">
          <h2 className="titleDeliver"> ÖZÜN GÖTÜR</h2>
          <span className="gray">HARADA</span>
          <p> Bakı və Sumqayıt</p>
          <span className="gray">NƏ ZAMAN</span>
          <p>Sifariş hazır olandan sonra</p>
          <span className="gray">QİYMƏT </span>
          <p className="green">Pulsuz</p>
          <span>3₼</span>
          </div>
          <div className="secondPart">
            <p className="gray">ƏLAVƏ</p>
            <p className="textStyle">Bu zaman online mağazanın meneceri ilə mağazaya gəlişinizin vaxtını dəqiqləşdirməyiniz xahiş olunur. Seçdiyiniz məhsulu arzuladığınız mağazaya ötürdükdə, biz sizi məlumatlandıracağıq.</p>
          </div>
        </div>
        <div className="partDeliver">
          <div className="firstPart">
          <h2 className="titleDeliver"> AZƏRPOÇT</h2>
          <span className="gray">HARADA</span>
          <p> Azərbaycan, istənilən yaşayış məntəqəsi</p>
          <span className="gray">NƏ ZAMAN</span>
          <p>Sifariş edilən andan 2 gün ərzində</p>
          <span className="gray">QİYMƏT </span>
          <p className="green">2-4₼</p>
          <span>3₼</span>
          </div>
          <div className="secondPart">
            <p className="gray">ƏLAVƏ</p>
            <p className="textStyle">Sifarişi yerindəcə nağd ödəniş etməklə məhsulu əldə edə bilərsiniz (online ödənişdən istifadə etməmisinizsə).</p>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Deliver;
