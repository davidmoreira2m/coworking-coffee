import styles from './best-selling-coffees.module.css';
import { Coffees } from './mock-coffees.js';

const BestSellingCoffees = () => {
  return (
    <div className={styles.BestSellingCoffees}>
      <div className={styles.containerBestSellingCoffees}>
        <div className={styles.headingSection}>
          <h2 className={styles.sectionTitle}>Você merece o melhor café!</h2>
        </div>
        <div className={styles.containerCards}>
          {Coffees.map((service) => (
            <div className={styles.card} key={service.id}>
              <div className={styles.containerImage}>
                <img
                  className={styles.image}
                  src={service.img}
                  alt="modelo do café"
                />
              </div>
              <div className={styles.textSection}>
                <h3 className={styles.coffeeName}>{service.name}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingCoffees;
