import About from "@/Components/About/About";
import Hero from "@/Components/Hero/Hero";
import HomeService from "@/Components/HomeService/HomeService";
import Stat from "@/Components/Stat/Stat";
import { Button } from "@/Components/ui/button";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Stat />
      <HomeService />
    </>
  );
};

export default Home;
