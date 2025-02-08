import heroImg from "../../../public/assets/banner.png";

import { Button } from "../ui/button";
const Hero = () => {
  return (
    <>
      <div className="w-2/3 mx-auto my-16 flex items-center">
        <div className="w-1/2 h-[600px] p-4 flex gap-10 flex-col py-28">
          <h1 className="text-5xl font-bold leading-snug">
            Pawfect Care: Where Happy Pets Meet Expert <span className="bg-green-400 px-3 rounded-sm">Vets!</span>
          </h1>
          <p className="text-justify text-muted-foreground">
            Because every wag, purr, and chirp matters! 🐾 From routine
            check-ups to emergency care, we’re here to keep your furry,
            feathered, and scaly friends happy and healthy. Trust our expert
            vets to provide compassionate care—one paw at a time!
          </p>
          <Button className="w-1/3 p-3">Book an Appointment</Button>
        </div>
        <div className="w-1/2 h-[600px]">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
