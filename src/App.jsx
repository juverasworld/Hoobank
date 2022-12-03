import React from 'react'
import styles from "./style";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Business from "./Components/Business";

import Billing from "./Components/Billing";
import CardDeal from "./Components/CardDeal";
import Testimonials from "./Components/Testimonials";
import Clients from "./Components/Clients";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          < Stats />
          < Business />
          < Billing />

          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />

        </div>
      </div>
    </div>
  );
}

export default App;