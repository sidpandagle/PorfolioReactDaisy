import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <div data-theme="light">
    <Header></Header>
    <Hero></Hero>
    <CTA></CTA>
    <Services></Services>
    <Footer></Footer>
    </div>
  )
}