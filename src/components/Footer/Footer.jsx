import styles from './footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'Sobre Nós',
    link: '/#',
  },
  {
    title: 'Contato',
    link: '/#',
  },
  {
    title: 'Blog',
    link: '/#',
  },
];

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.companyDetail}>
          <h2 className={styles.company}>Crux Coworking Café</h2>
          <p className={styles.companyDescription}>
            Café artesanal, Vibes Aconchegantes, Momentos Inesquecíveis - Sua
            Folga perfeita para um expresso ou um dua Produtivo.
          </p>
          <a
            className={styles.youtubeChannel}
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visite nosso canal no Youtube
          </a>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.importantLinks}>
            <h2 className={styles.titleImportantLinks}>Links Importantes</h2>
            <ul className={styles.footerLinks2}>
              {FooterLinks.map((data) => (
                <li key={data.title}>
                  <a className={styles.linkName} href={data.link}>
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.adress}>
            <h2 className={styles.titleAdress}>Endereço</h2>
            <div>
              <p>Av. Acre Nº100 - João Pessoa</p>
              <p>(83) 99999-9999</p>
              <div className={styles.socialLinks}>
                <a href="/#">
                  <FaInstagram className={styles.socialIcons} />
                </a>
                <a href="/#">
                  <FaFacebook className={styles.socialIcons} />
                </a>
                <a href="/#">
                  <FaLinkedin className={styles.socialIcons} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
