import styles from './premium-coffee.module.css';
import PremiumCoffeeImg from '../../assets/premium-coffee.jpeg';
import CoffeeUltraSpecial from '../../assets/coffee-ultra-special.jpeg';
import { GiCoffeeBeans, GiCoffeeCup } from 'react-icons/gi';
import { FaCoffee } from 'react-icons/fa';

const PremiumCoffee = () => {
  return (
    <div className={styles.PremiumCoffee}>
      <div className={styles.containerPremiumCoffee}>
        <div className={styles.containerImage}>
          <img
            className={styles.imagePremiumCoffee}
            src={PremiumCoffeeImg}
            alt="imagem de café"
          />
        </div>
        <div className={styles.textContentSection}>
          <div className={styles.titleSection}>
            <h2>Café Premium Blend</h2>
            <p>
              Um café de sabor marcante e qualidade excepcional. Cultivado com
              grãos selecionados para proporcionar uma experiência única e
              inesquecível a cada xícara. Ideal para quem aprecia um café de
              alto padrão, com notas ricas e aromas envolventes.
            </p>
          </div>
          <div className={styles.premiumIcon}>
            <div className={styles.specials}>
              <div className={styles.contentSpecials}>
                <div className={styles.circle}>
                  <GiCoffeeBeans />
                </div>
                <span className={styles.typeOffCoffee}>Café Premium</span>
              </div>

              <div className={styles.contentSpecials}>
                <div className={styles.circle}>
                  <GiCoffeeCup />
                </div>
                <span className={styles.typeOffCoffee}>Cafés Quentes</span>
              </div>

              <div className={styles.contentSpecials}>
                <div className={styles.circle}>
                  <FaCoffee />
                </div>
                <span className={styles.typeOffCoffee}>Cafés Frios</span>
              </div>
            </div>
            <div className={styles.teaLovers}>
              <h2>Amantes de chá</h2>
              <p>
                Também temos uma linha exclusiva de chás especiais, perfeitos
                para quem busca novas experiências e sabores únicos, Venha
                conhecer nossas opções.
              </p>
            </div>
          </div>
          <div className={styles.specialLines}>
            <h2>Linhas Especiais de Cafés e Chás</h2>
            <p>
              Nossa cafeteria se orgulha de oferecer uma seleção especial de
              cafés e chás, cuidadosamente escolhidos para agradar os paladares
              mais exigentes. Cada xícara é uma verdadeira experiência, com
              sabores únicos e notas que encantam. Venham se apaixonar ainda
              mais pela arte do café e chá em nossa cafeteria, onde qualidade e
              paixão se encontram em cada gole.
            </p>
          </div>
        </div>
        <div className={styles.containerImageUltraSpecial}>
          <img
            className={styles.imagePremiumCoffee}
            src={CoffeeUltraSpecial}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumCoffee;
