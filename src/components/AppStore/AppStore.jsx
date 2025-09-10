import styles from './app-store.module.css';
import AppStoreImg from '../../assets/website/app_store.png';
import PlayStoreImg from '../../assets/website/play_store.png';

const AppStore = () => {
  return (
    <div className={styles.AppStore}>
      <div className={styles.backImage}>
        <div className={styles.containerTextAppStore}>
          <h2 className={styles.titleAppStore}>
            Crux Coworking Café está disponivel para Andoird e IOS.
          </h2>
          <div className={styles.containerImages}>
            <a href="/">
              <img
                className={styles.appStoreImage}
                src={PlayStoreImg}
                alt="Play Store"
              />
            </a>
            <a href="/">
              <img
                className={styles.appStoreImage}
                src={AppStoreImg}
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
