import heroImg from "../../../public/assets/banner.png";
import injection from "../../../public/assets/injection.png";

import { Button } from "../ui/button";
const Hero = () => {
  return (
    <>
      <div>
        <div className="lg:w-2/3 w-11/12 mx-auto lg:my-16 my-10 flex lg:flex-row flex-col items-center relative">
          <div className="lg:w-1/2 lg:h-[600px] lg:p-4 px-8 flex gap-10 flex-col lg:py-28">
            <div className="lg:flex flex-col gap-5 hidden">
              <h1 className="lg:text-5xl font-bold">Pawfect Care: Where</h1>
              <h1 className="lg:text-5xl font-bold">Happy Pets Meet Expert</h1>
              <span className="bg-green-400 px-3 py-1 rounded-sm font-bold lg:text-5xl w-40">
                Vets!
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-bold leading-relaxed lg:hidden block">
                Pawfect Care: Where Happy Pets Meet Expert{" "}
                <span className="bg-green-400 px-3 py-1 rounded-sm font-bold">
                  Vets!
                </span>
              </h1>
            </div>
            <p className="text-justify text-muted-foreground w-11/12">
              Because every wag, purr, and chirp matters! 🐾 From routine
              checkups to emergency care, we’re here to keep your furry,
              feathered, and scaly friends happy and healthy. Trust our expert
              vets to provide compassionate care—one paw at a time!
            </p>
            <Button className="bg-green-500 lg:w-1/3 lg:p-6 p-5 w-3/5">
              Book an Appointment
            </Button>
          </div>
          <div className="lg:w-1/2 lg:h-[600px]">
            <img src={heroImg} alt="" />
          </div>
        </div>
        <div className="absolute top-[185px] left-[249px] hidden lg:block">
          <img className="w-24 -rotate-180" src={injection} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
