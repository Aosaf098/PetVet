import { Check } from "lucide-react";
import gobo from "../../../public/assets/about.png";


const About = () => {
  return (
    <>
      <div className="lg:w-2/3 mx-auto lg:my-8 flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-3/5">
            <img className="lg:w-[600px]" src={gobo} alt="" />
        </div>
        <div className="lg:w-1/2 p-4 flex flex-col gap-10">
          <div className="w-40 px-1 py-2 rounded-lg shadow-xl">
            <h3 className="text-center text-2xl font-bold text-green-400">
              About Us
            </h3>
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl w-11/12 leading-snug font-semibold">
              We Love to Take Care of Your Pets
            </h1>
          </div>
          <p className="text-justify text-muted-foreground w-11/12">
            Pawscare is the largest specialty pet retailer of services and
            solutions for the lifetime needs of pets. At Pawscare, we love pets,
            and we believe pets make us better people.
          </p>
          <div className="grid lg:grid-cols-2 gap-y-8 py-6">
            <div className="flex items-center gap-2 w-3/4">
              <div className="w-8 h-8 rounded-lg bg-green-400 flex items-center justify-center">
                <Check className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Skilled Personal</h3>
            </div>
            <div className="flex items-center gap-2 w-3/4">
              <div className="w-8 h-8 rounded-lg bg-green-400 flex items-center justify-center">
                <Check className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Pets Care 24/7</h3>
            </div>
            <div className="flex items-center gap-2 w-3/4">
              <div className="w-8 h-8 rounded-lg bg-green-400 flex items-center justify-center">
                <Check className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Best Veterinars</h3>
            </div>
            <div className="flex items-center gap-2 w-3/4">
              <div className="w-8 h-8 rounded-lg bg-green-400 flex items-center justify-center">
                <Check className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Quality Food</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
