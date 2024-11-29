
import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const Hero =lazy(()=>import("./components/hero/Hero.jsx"));
const Services =lazy(()=>import("./components/services/Services.jsx"));
const Portfolio =lazy(()=>import("./components/portfolio/Portfolio.jsx"));
const Contact =lazy(()=>import("./components/contact/Contact.jsx"));

const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={"loading...."}>
      <LazyLoad  height={"100vh"} offset={-100}>
      <section id='hero'>
      <Hero/>
      </section>
      </LazyLoad>
      </Suspense>

      <Suspense fallback={"loading...."}>
      <LazyLoad  height={"100vh"} offset={-100}>
      <section id='services'>
        <Services/>
      </section>
      </LazyLoad>
      </Suspense>


      <Suspense fallback={"loading...."}>
      <LazyLoad  height={"100vh"} offset={-100}>
      {/*<section id="portfolio">*/}
        <Portfolio/>
        </LazyLoad>
      </Suspense>

      {/*</section>*/}

      <Suspense fallback={"loading...."}>
      <LazyLoad  height={"100vh"} offset={-100}>
      <section id='contact'>
        <Contact/>

      </section>
      </LazyLoad>
      </Suspense>

    </div>
  )
}

export default App