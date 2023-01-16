// import { useEffect } from 'react';
import '../src/style.css'

import About from './Components/About';
import Blogs from './Components/Blogs';
// import Counter from './Components/Counter';
import Experties from './Components/Experties';
import Footer from './Components/Footer/Footer';
import IntroSkewStart from './Components/IntroSkewStart';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
// import Testimonials from './Components/Testimonials';

function App() {

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "./js/main.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  return (
    <>
      <NavBar />
      <IntroSkewStart 
      title1="Hello, world!" 
      title2="Hello, I am Ujjawal" 
      position="Full Stack Developer" 
      introText="Flutter Developer, MERN Stack Developer, Full Stack Mobile and Web " />
      <About />
      <Experties />
      {/* <Counter /> */}
      <Projects />
      {/* <Testimonials /> */}
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
