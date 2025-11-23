import './Hero.css';
import { Container, Button } from 'react-bootstrap';
import heroImage1 from '../../assets/book 1.png';
import heroImage2 from '../../assets/book 3.png';
import heroImage3 from '../../assets/book 1.png';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation('hero');
  const isAr = i18n.language === 'ar' || i18n.language === 'AR';

  return (
    <section className="hero-section">
      <Container>
        <div className={`hero-wrapper ${isAr ? "rtl" : "ltr"}`}>

          {/* النص */}
          <div className='hero-content'>
            <p className="hero-description"
              dangerouslySetInnerHTML={{ __html: t('description') }}>
            </p>
            <Button className="hero-btn">{t('button')}</Button>
          </div>

          {/* الصور */}
          <div className='hero-images'>
            <img src={heroImage1} alt="Book" className="hero-img img1" />
            <img src={heroImage2} alt="Book" className="hero-img img2" />
            <img src={heroImage3} alt="Book" className="hero-img img3" />
          </div>

        </div>
      </Container>
    </section>
  );
}
