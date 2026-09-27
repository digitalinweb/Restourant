import AboutSection from './components/AboutSection.jsx'
import ChefSection from './components/ChefSection.jsx'
import DeliveryBanner from './components/DeliveryBanner.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Hero from './components/Hero.jsx'
import LocationHours from './components/LocationHours.jsx'
import MenuHighlight from './components/MenuHighlight.jsx'
import MenuPreview from './components/MenuPreview.jsx'
import Navbar from './components/Navbar.jsx'
import Newsletter from './components/Newsletter.jsx'
import ProcessSection from './components/ProcessSection.jsx'
import ReservationForm from './components/ReservationForm.jsx'
import Testimonials from './components/Testimonials.jsx'
import TrustBar from './components/TrustBar.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <MenuHighlight />
        <AboutSection />
        <ChefSection />
        <WhyChooseUs />
        <ProcessSection />
        <Gallery />
        <Testimonials />
        <MenuPreview />
        <ReservationForm />
        <FAQ />
        <LocationHours />
        <DeliveryBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
