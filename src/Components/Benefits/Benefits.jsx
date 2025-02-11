import gigi from "../../../public/assets/gigi.png";
import BenefitsAccordion from "./BenefitsAccordion";

const Benefits = () => {
  return (
    <>
      <div className="lg:w-2/3 lg:h-[650px] mx-auto my-8 flex lg:flex-row flex-col justify-around items-center">
        <div className="p-4 flex flex-col gap-10 lg:w-1/2">
          <div className="w-40 px-1 py-2 rounded-lg shadow-xl">
            <h3 className="text-center text-2xl font-bold text-green-400">
              Benefits
            </h3>
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl leading-snug font-semibold">
              Why Choose Our Pet Care Company?
            </h1>
          </div>
          <div className="w-11/12">
            <BenefitsAccordion />
          </div>
        </div>
        <div className="lg:w-3/5 flex items-center justify-center lg:ml-20">
          <img className="lg:w-[580px]" src={gigi} alt="" />
        </div>
      </div>
    </>
  );
};

export default Benefits;
