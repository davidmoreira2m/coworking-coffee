import styles from './interactive-banner.module.css';
import BannerImage from '../../assets/banner-image.png';

const InteractiveBanner = () => {
  return (
    <div className={styles.InteractiveBanner}>
      <div className={styles.interactiveBannerContainer}>
        {/* text-content-section */}
        <div className={styles.textContentSection}>
          <h1>
            Servimos o <span>Café</span> mais gostoso da cidade
          </h1>
          <h2>
            E se quiser trabalhar temos <span>Coworking</span> equipado com
            segunda tela
          </h2>
          <p>
            Ideal para você e sua equipe passarem um dia inesquecível em um
            ambiente inspirador
          </p>
          <div className={styles.containerButton}>
            <button className={styles.primaryButton}>Café & Code</button>
          </div>
        </div>

        {/* image-section */}
        <div className={styles.imageSection}>
          <div className={styles.code}>
            <button className={styles.primaryButton}>Agendar Coworking</button>
          </div>
          <div className={styles.imageCoffee}>
            <img src={BannerImage} alt="imagem de um café" />
          </div>
          <div className={styles.coffee}>
            <button className={styles.primaryButton}>Beba seu café</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBanner;
