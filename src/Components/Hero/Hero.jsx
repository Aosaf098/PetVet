import heroImg from "../../../public/assets/banner.png";

import { Button } from "../ui/button";
const Hero = () => {
  return (
    <>
      <div className="lg:w-2/3 mx-auto lg:my-16 my-10 flex lg:flex-row flex-col items-center">
        <div className="lg:w-1/2 lg:h-[600px] lg:p-4 px-8 flex gap-10 flex-col lg:py-28">
          <h1 className="text-5xl font-bold leading-snug">
            Pawfect Care: Where Happy Pets Meet Expert <span className="bg-green-400 px-3 rounded-sm">Vets!</span>
          </h1>
          <p className="text-justify text-muted-foreground">
            Because every wag, purr, and chirp matters! 🐾 From routine
            check-ups to emergency care, we’re here to keep your furry,
            feathered, and scaly friends happy and healthy. Trust our expert
            vets to provide compassionate care—one paw at a time!
          </p>
          <Button className="lg:w-1/3 w-1/2 p-3">Book an Appointment</Button>
        </div>
        <div className="lg:w-1/2 lg:h-[600px]">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
