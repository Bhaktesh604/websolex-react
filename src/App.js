import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import Banner from './Component/banner';
import ClientSlider from './Component/ClientSlider';
import ServiceSection from './Component/servicesection';
import PortfolioSection from './Component/portfoliosection';
import ChooseSection from './Component/whychoose';
import StickySection from './Component/StickySection';
import TechnologiesSection from './Component/technologies';
import ReviewSection from './Component/Review';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ClientSlider />
      <ServiceSection />
      <PortfolioSection />
      <ChooseSection />
      <TechnologiesSection />
      <ReviewSection />
      {/* <StickySection /> */}
    </>
  );
}

export default App;
