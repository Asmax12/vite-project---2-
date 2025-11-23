import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { BsChevronDoubleLeft, BsGeoAltFill, BsEnvelopeFill, BsTelephoneOutboundFill } from "react-icons/bs";

import './Footer.css';
import smallicon from "../../assets/smallicon.png";
import Frame from "../../assets/Frame 28.png";
import payment from "../../assets/payment.png";

export default function Footer() {
  const { t, i18n } = useTranslation("footer");
  const currentLanguage = i18n.language;

  return (
    <footer className='footer text-center text-md-end mt-5'>
      <div className='container py-5'>
        <div className='row'>

          {/* انضم إلينا */}
          <div className='col-lg-4 col-md-12 mb-3'>
            <div className='info d-flex flex-column gap-2 align-items-start'>
              <div className="info-text">
                <h5 className='title-info'>logo</h5>
                <img src={smallicon} className='mb-2' alt="logo" />
                <p className='join-text'>{t('joinUs')}</p>
              </div>

              <div className='form'>
                <label className="label">{t('latestNews')}</label>
                <div className="form-foot">
                  <BsEnvelopeFill className='icon-foot fs-3' />
                  <input
                    type="email"
                    className="input-foot"
                    placeholder={t('emailPlaceholder')}
                  />
                  <button className="btn-foot">{t('subscribeNow')}</button>
                </div>
              </div>
            </div>
          </div>

          {/* روابط الموقع */}
          <div className='col-lg-2 col-md-12 mb-4'>
            <div className='d-flex flex-column gap-2 align-items-start'>
              <h5 className='text-light'>{t('site')}</h5>
              <img src={smallicon} className='mb-2' alt="logo" />
              <ul className="list-unstyled lh-lg m-0 p-0">
                {['home', 'allBooks', 'newProducts', 'notes', 'reviews'].map((link, i) => (
                  <li className="mb-1" key={i}>
                    <Link to={`/${link === 'home' ? '' : link}`} className='text-decoration-none text-white d-flex align-items-center'>
                      <BsChevronDoubleLeft
                        className='icon-foot ms-2 fs-5'
                        style={{ transform: currentLanguage === "en" ? "rotate(180deg)" : "rotate(0)" }}
                      />
                      {t(link)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* سياسة الموقع */}
          <div className='col-lg-3 col-md-12 mb-4'>
            <div className='d-flex flex-column gap-2 align-items-start'>
              <h5 className='text-light'>{t('sitePolicy')}</h5>
              <img src={smallicon} className='mb-2' alt="logo" />
              <ul className="list-unstyled lh-lg m-0 p-0">
                {['termsConditions', 'shippingPolicy', 'privacyPolicy'].map((policy, i) => (
                  <li className="mb-1" key={i}>
                    <Link to="/" className='text-decoration-none text-white d-flex align-items-center'>
                      <BsChevronDoubleLeft
                        className='icon-foot ms-2 fs-5'
                        style={{ transform: currentLanguage === "en" ? "rotate(180deg)" : "rotate(0)" }}
                      />
                      {t(policy)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* التواصل */}
          <div className='col-lg-3 col-md-12 mb-4'>
            <div className='contact lh-lg d-flex flex-column gap-2 align-items-start'>
              <h5 className='text-light mb-3 title-contact'>{t('contactUs')}</h5>
              <img src={smallicon} className='mb-2' alt="logo" />
              
              <div className='d-flex align-items-center gap-2'>
                <BsGeoAltFill className='icon-foot fs-4' />
                <span className='text'>44 Danwers, NY City, USA, 70-102</span>
              </div>

              <div className='d-flex align-items-center gap-2'>
                <BsEnvelopeFill className='icon-foot fs-4' />
                <span className='text'>info.example@gmail.com</span>
              </div>

              <div className='d-flex align-items-center gap-2'>
                <BsTelephoneOutboundFill className='icon-foot fs-4' />
                <span className='text'>91+585-656-658</span>
              </div>
            </div>
          </div>

        </div> {/* نهاية row */}

        {/* payment و social */}
        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
          <div><img src={payment} width="300px" height="60px" alt="logo" /></div>
          <div className="social">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><TiSocialFacebook /></a>
          </div>
        </div>

      </div> {/* نهاية container */}

      {/* حقوق النشر */}
      <div className="text-center position-relative mt-2" style={{ overflow: "hidden" }}>
        <img src={Frame} alt="logo" className='img-frame' />
        <h5 className="text-white position-absolute bottom-0 start-50 translate-middle-x" style={{ fontSize: "20px" }}>
          {t('copyright')}
        </h5>
      </div>
    </footer>
  );
}
