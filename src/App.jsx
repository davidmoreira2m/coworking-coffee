import AppStore from './components/AppStore/AppStore';
import BestSellingCoffees from './components/BestSellingCoffees/BestSellingCoffees';
import InteractiveBanner from './components/InteractiveBanner/InteractiveBanner';
import Navbar from './components/navbar/Navbar';
import PremiumCoffee from './components/PremiumCoffee/PremiumCoffee';

const App = () => {
  return (
    <div>
      <Navbar />
      <InteractiveBanner />
      <BestSellingCoffees />
      <PremiumCoffee />
      <AppStore />
    </div>
  );
};

export default App;
