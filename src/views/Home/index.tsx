import dynamic from 'next/dynamic';
import LandingSection from './components/LandingSection';
const LocalHotelSlider = dynamic(() => import('./components/LocalHotelSlider'));

const HomeContainer = () => {
  return (
    <>
      <LandingSection />
      <LocalHotelSlider />
    </>
  );
};

export default HomeContainer;
