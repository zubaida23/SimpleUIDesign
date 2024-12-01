import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Courses from "@/components/courses/Courses";
import Achivements from "@/components/achivements/Achivements";
import CoursesCards from "@/components/courses/CoursesCards";
import About from "@/components/about/About";
import Testimonials from "@/components/testimonial/Testimonials";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
    <div className="h-screen">
    <Header/>
    <Hero/>
    <Courses/>
    <Achivements/>
    <CoursesCards/>
    <About/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  );
}
