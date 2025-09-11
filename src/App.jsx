import AppStore from './components/AppStore/AppStore';
import BestSellingCoffees from './components/BestSellingCoffees/BestSellingCoffees';
import Footer from './components/Footer/Footer.jsx';
import InteractiveBanner from './components/InteractiveBanner/InteractiveBanner';
import Navbar from './components/navbar/Navbar';
import PremiumCoffee from './components/PremiumCoffee/PremiumCoffee';
import Testimonials from './components/Testimonials/Testimonials.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <InteractiveBanner />
      <BestSellingCoffees />
      <PremiumCoffee />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
