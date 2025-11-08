import './Footer.css';
import smallicon from "../../assets/smallicon.png";
import Frame from "../../assets/Frame 28.png";
import payment from "../../assets/payment.png";

import { Link } from 'react-router-dom';
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { BsChevronDoubleLeft, BsGeoAltFill, BsEnvelopeFill, BsTelephoneOutboundFill } from "react-icons/bs";

export default function Footer({ language }) {
  return (
    <footer className='footer text-center text-md-end mt-5'>
      <div className='container py-5'>
        <div className='row'>

          {/* التواصل */}
          <div className='col-lg-4 col-md-12 mb-4'>
            <div className='contact lh-lg'>
              <h5 className='text-light mb-3 title-contact'>
                {language === "AR" ? "تواصل معنا" : "Contact Us"}
              </h5>
              <img src={smallicon} className='mb-3' alt="logo" />
              <p className='text'>44 Danwers, NY City, USA, 70-102 <BsGeoAltFill className='icon-foot me-2 fs-4' /></p>
              <p className='text'>info.example@gmail.com <BsEnvelopeFill className='icon-foot me-2 fs-4' /></p>
              <p className='text'>91+585-656-658 <BsTelephoneOutboundFill className='icon-foot me-2 fs-4' /></p>
            </div>
          </div>

          {/* سياسة الموقع */}
          <div className='col-lg-2 col-md-12 mb-4'>
            <div className='links'>
              <h5 className='title text-light mb-3'>
                {language === "AR" ? "سياسة الموقع" : "Site Policy"}
              </h5>
              <img src={smallicon} className='mb-3' alt="logo" />
              <ul className="list-unstyled lh-lg">
                <li>
                  <Link to="/" className='text-decoration-none'>
                    {language === "AR" ? "الشروط و الاحكام" : "Terms & Conditions"}
                    <BsChevronDoubleLeft className='icon-foot ms-2 fs-5' />
                  </Link>
                </li>
                <li>
                  <Link to="/" className='text-decoration-none'>
                    {language === "AR" ? "سياسة الشحن" : "Shipping Policy"}
                    <BsChevronDoubleLeft className='icon-foot ms-2 fs-5' />
                  </Link>
                </li>
                <li>
                  <Link to="/" className='text-decoration-none'>
                    {language === "AR" ? "الخصوصية" : "Privacy Policy"}
                    <BsChevronDoubleLeft className='icon-foot ms-2 fs-5' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* روابط الموقع */}
          <div className='col-lg-2 col-md-12 mb-4'>
            <div className='links'>
              <h5 className='links-title text-light mb-3'>
                {language === "AR" ? "الموقع" : "Site"}
              </h5>
              <img src={smallicon} className='mb-3' alt="logo" />
              <ul className="list-unstyled lh-lg">
                <li>
                  <Link to="/" className='text-decoration-none'>
                    {language === "AR" ? "الرئيسية" : "Home"} <BsChevronDoubleLeft className='icon-foot ms-2 fs-5' />
                  </Link>
                </li>
                <li>
                  <Link to="/all-books" className='text-decoration-none'>
                    {language === "AR" ? "جميع الكتب" : "All Books"} <BsChevronDoubleLeft className='icon-foot ms-2 fs-5' />
                  </Link>
                </li>
                <li>
                  <Link to="/new-products" className='text-decoration-none'>
                    {language === "AR" ? "المنتجات الجديدة" : "New Products"} <BsChevronDoubleLeft className='icon-foot ms-2 fs-5' />
                  </Link>
                </li>
                <li>
                  <Link to="/notes" className='text-decoration-none'>
                    {language === "AR" ? "المذكرات" : "Notes"} <BsChevronDoubleLeft className='icon-foot ms-2 fs-5' />
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className='text-decoration-none'>
                    {language === "AR" ? "المراجعات" : "Reviews"} <BsChevronDoubleLeft className='icon-foot ms-2 fs-5' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* انضم إلينا */}
          <div className='col-lg-4 col-md-12 mb-4'>
            <div className='info'>
              <div>
                <h5 className='title-info'>logo</h5>
                <p className='text-end'>
                  {language === "AR" ? (
                    <>
                      انضم إلينا واستكشف كنوز الطبيعة <br />
                      من خلال كتبنا المختارة بعناية.
                    </>
                  ) : (
                    <>Join us and explore nature's treasures through our carefully selected books.</>
                  )}
                </p>
              </div>

              <div className='form'>
                <label className="label">أخر الأخبار</label>
                <div className="form-foot">
                  <button className="btn-foot">سجل الآن</button>
                  <input type="email" className="input-foot" placeholder="ادخل بريدك الالكتروني" />
                  <BsEnvelopeFill className='icon-foot fs-3' />
                </div>
              </div>
            </div>
          </div>

        </div> {/* نهاية row */}

        {/* payment و social */}
        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
          <div>
            <img src={payment} width="300px" height="60px" alt="logo" />
          </div>
          <div className="social">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><TiSocialFacebook /></a>
          </div>
        </div>

      </div> {/* نهاية container */}
      
        {/*حقوق النشر */}
      <div className="text-center position-relative mt-3" style={{ overflow: "hidden" }}>
           <img  src={Frame}   alt="logo" className='img-frame'  />
           <h5   className="text-white position-absolute bottom-0 start-50 translate-middle-x" 
               style={{ fontSize: "20px" }} > © جميع الحقوق محفوظة 2025 </h5>
     </div>

    </footer>
  )
}
