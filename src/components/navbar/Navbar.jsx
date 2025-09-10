import Logo from '../../assets/website/logo.svg';
import { Menu } from './menuitem';
import { FaCoffee } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        {/* Logo Section */}
        <div className={styles.containerLogo}>
          <a href="/" className={styles.redirecLink}>
            <img src={Logo} alt="Logo" className={styles.imageLogo} />
            <div className={styles.contentText}>
              <span className={styles.textLogo}>Coworking Café</span>
            </div>
          </a>
        </div>
        {/* Links section */}
        <div className={styles.containerLinks}>
          <ul className={styles.listLinks}>
            {Menu.map((menu) => (
              <li key={menu.id} className={styles.link}>
                <a href={menu.link} className={styles.linkName}>
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
          <button className={styles.cartButton}>
            Carrinho <FaCoffee />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
