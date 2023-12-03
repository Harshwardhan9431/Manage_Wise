import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Welcome from "./components/welcome/Welcome";
import Dashboard from "./components/dashboard/Dashboard";
import Features from "./components/features/Features";
import FAQ from "./components/faq/FAQ";
import Morefeatures from "./components/morefeatures/Morefeatures";
import Testimonials from "./components/testimonials/Testimonials";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Dashboard />
      <Features />
      <Morefeatures />
      <FAQ />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
