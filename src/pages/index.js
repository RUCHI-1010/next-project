import Header from "@/app/components/Header";
import HomeComponent from "@/app/components/Home";
import AboutMe from "@/app/components/AboutMe";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

const MainPage = () => (
    <>
        <Header />
        <HomeComponent />
        <AboutMe />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
    </>
);

export default MainPage;
