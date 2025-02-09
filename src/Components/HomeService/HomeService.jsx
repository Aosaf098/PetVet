import Lottie from "lottie-react";
import catSleeping from "../../../public/assets/catSleeping.json";
import dogSleeping from "../../../public/assets/dogSleeping.json";
const HomeService = () => {
  return (
    <>
      <div className="w-3/4 mx-auto my-16">
        <h1 className="text-center lg:text-4xl text-3xl font-bold tracking-wider">
          Our Services
        </h1>
        <div className="my-12 w-3/4 mx-auto gap-2 grid grid-cols-3">
          <div className="mx-auto">
            <ul className="p-3 space-y-6 *:text-xl *:font-semibold flex flex-col items-center justify-center *:w-72 *:bg-green-500">
              <li className="p-2 rounded-lg text-center">Routine Check Up</li>
              <li className=" p-2 rounded-lg text-center">
                Veterinary Medicine
              </li>
              <li className="p-2 rounded-lg text-center">Vaccination</li>
              <li className=" p-2 rounded-lg text-center">Deworming</li>
              <li className="p-2 rounded-lg text-center">Spay & Neuter</li>
            </ul>
          </div>
          <div className=" mx-auto">
            <ul className="p-3 space-y-6 *:text-xl *:font-semibold flex flex-col items-center justify-center *:w-72 *:bg-green-500">
              <li className="p-2 rounded-lg text-center">
                Emergency Surgery
              </li>
              <li className=" p-2 rounded-lg text-center">
                Orthopedic Surgery
              </li>
              <li className="p-2 rounded-lg text-center">Ultrasonography</li>
              <li className="p-2 rounded-lg text-center">
                Microscopic Examination
              </li>
              <li className="p-2 rounded-lg text-center">X-Ray & Cytology</li>
            </ul>
          </div>
          <div className="mx-auto">
            <ul className="p-3 space-y-6 *:text-xl *:font-semibold flex flex-col items-center justify-center *:w-72 *:bg-green-500">
              <li className="p-2 rounded-lg text-center">
                Pathological Examination
              </li>
              <li className=" p-2 rounded-lg text-center">
                Migration Consultancy
              </li>
              <li className=" p-2 rounded-lg text-center">
                Postoperative Care
              </li>
              <li className=" p-2 rounded-lg text-center">
                Grooming & Medication
              </li>
              <li className="  p-2 rounded-lg text-center">
                Food & Accessories
              </li>
            </ul>
          </div>

          {/* <div className="w-1/2 border-4 border-solid border-blue-500 h-[400px]">
          <div className="w-1/2 mx-auto">
                <Lottie animationData={dogSleeping} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeService;
