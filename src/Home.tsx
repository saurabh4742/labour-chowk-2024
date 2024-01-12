import Navbar from "./components/ui/Navbar";
import Services from "./components/ui/Services";
import WhyUs from "./components/ui/WhyUs";
import Testimonials from "./components/ui/Testimonials";
import ContactUs from "./components/ui/ContactUs";
import Footer from "./components/ui/Footer";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <div>
      <section id="home">
        <header>
          <Navbar />
        </header>
        <div className="header-text">
          <h1>
            <span>LabourChowk.com</span>
            <p>
              A Digital Platform to fill the gap between Workers and Customers
            </p>
          </h1>
        </div>
      </section>

      <Services />
      <WhyUs />
      <Testimonials />
      <section className="flex justify-center mt-8" id="website">
       <Link to="/home" >
        <Button className="text-2xl bg-emerald-800" variant="default" >Visite our web portal</Button>
       </Link>
      </section>
      <section id="download">
        <h1>Download our Mobile App</h1>
        <p>Scan the QR below to download</p>
        <img alt="QR" src="/images/downloadQR.jpeg" />
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
