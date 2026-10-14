import Hero from "./components/Hero";
import Products from "./components/Products";
import Magic from "./components/Magic";
import Services from "./components/Services";
import Testimonials from "./components/Testimaonial";
import Cta from "./components/Cta";

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Magic />
      <Services />
      <Testimonials />
      <Cta />
    </>
  );
}

export default Home;