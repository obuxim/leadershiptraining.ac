import About from "../Components/Homepage/About";
import Blog from "../Components/Homepage/Blog";
import Courses from "../Components/Homepage/Courses";
import Cta from "../Components/Homepage/Cta";
import Faq from "../Components/Homepage/Faq";
import Hero from "../Components/Homepage/Hero";
import Teachers from "../Components/Homepage/Teachers";
import Testimonial from "../Components/Homepage/Testimonial";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Courses />
    <Cta />
    <Faq />
    <Teachers />
    <Testimonial />
    <Blog />
    </>
  );
}
