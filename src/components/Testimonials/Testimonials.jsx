import styles from './testimonial.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TestimonialData } from './testimonial';

const Testimonials = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.Testimonials}>
      <div className={styles.container}>
        <div className={styles.testimonialTitle}>
          <h2>Depoimentos</h2>
        </div>
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className={styles.testimonialCard} key={data.id}>
                <div className={styles.card}>
                  <div className={styles.imageSection}>
                    <img src={data.img} alt="foto do cliente" />
                  </div>
                  <div className={styles.textSection}>
                    <p className={styles.testimony}>{data.text}</p>
                    <p className={styles.customerName}>{data.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
