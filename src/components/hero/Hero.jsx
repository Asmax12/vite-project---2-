import './Hero.css'
import { Container, Button } from 'react-bootstrap';
import heroImage1 from '../../assets/book 1.png'; 
import heroImage2 from '../../assets/book 3.png'; 
import heroImage3 from '../../assets/book 1.png'; 

export default function Hero({ language }) {
  return (
    <section className="hero-section">
      <Container className='Container'>
        <div className='row'>
        
    <div className='col-lg-5  text-md-start hero-content'>
  <p className="hero-description mt-5">
    {language === "AR" ? (
      <>
        بيع كتب الجيولوجيا يعدّ فرصة رائعة للطلاب والباحثين ومحبي العلوم الطبيعية <br />
        لفهم تكوين الأرض وتاريخها. تقدم هذه الكتب معلومات معمقة حول الصخور، <br />
        المعادن، البراكين، الزلازل، وتحركات الصفائح التكتونية، مما يساعد القارئ على <br />
        فهم البيئات الطبيعية والكوارث الجيولوجية. من خلال توفير كتب الجيولوجيا، <br />
        يمكن للقراء الاطلاع على أحدث الدراسات والنظريات المتعلقة بعلم الأرض، مما <br />
        يعزز من وعيهم البيئي ويشجعهم على المشاركة في الحفاظ على كوكبنا
        .
      </>
    ) : (
      <>
        Selling geology books is a great opportunity for students, researchers,<br /> and science enthusiasts 
        to understand the Earth's formation and history. <br /> These books provide in-depth information about rocks,
        minerals, volcanoes,<br /> earthquakes, and tectonic plate movements, helping readers understand 
        natural <br /> environments and geological hazards. By offering geology books, readers can access<br />
        the latest studies and theories in earth science, raising environmental awareness and <br />encouraging 
        participation in protecting our planet.
      </>
    )}
  </p>

  <Button className="hero-btn">
    {language === "AR" ? "سجل الأن" : "Sign Up Now"}
  </Button>
</div>

          {/* {image} */}
              <div className='col-lg-7 hero-images'>
                <div className='image'>  
              <img src={heroImage1} alt="Book" className="img-fluid hero-img img1" />
              <img src={heroImage2} alt="Book" className="img-fluid hero-img img2" />
              <img src={heroImage3} alt="Book" className="img-fluid hero-img img3" />
              </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
