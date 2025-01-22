import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import About from './components/About';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';

function App() {
  return (
    <div className="min-h-screen noise bg-gradient-to-r from-zinc-900/10 to-red-800/15 bg-zinc-900">
      <Header />
      <Hero />
      <PortfolioSection
        id="3d"
        title={portfolioData.threeDArt.title}
        subtitle={portfolioData.threeDArt.subtitle}
        items={portfolioData.threeDArt.items}
      />
      <PortfolioSection
        id="2d"
        title={portfolioData.twoDArt.title}
        subtitle={portfolioData.twoDArt.subtitle}
        items={portfolioData.twoDArt.items}
      />
      <PortfolioSection
        id="graphics"
        title={portfolioData.graphics.title}
        subtitle={portfolioData.graphics.subtitle}
        items={portfolioData.graphics.items}
      />
      <About />
      <Footer />
    </div>
  );
}

export default App;