
const HomeService = () => {
  return (
    <>
      <div className="lg:w-3/4 w-11/12 mx-auto my-8">
        <h1 className="text-center lg:text-4xl text-2xl font-bold tracking-wider">
          Our Services
        </h1>
        <div className="my-12 lg:w-3/4 w-11/12 mx-auto ">
          <div className="mx-auto">
            <ul className="p-3 grid grid-cols-2 lg:grid-cols-3 place-items-center lg:gap-8 gap-x-20 gap-y-8 *:text-xl *:font-semibold lg:*:w-72 *:w-48 lg:*:h-auto *:h-16 *:bg-green-500 *:shadow-xl *:p-2 *:rounded-lg *:text-center">
              <li className="hover:bg-green-600 text-white">
                Routine Check Up
              </li>
              <li className="hover:bg-green-600 text-white">
                Veterinary Medicine
              </li>
              <li className="hover:bg-green-600 text-white">Vaccination</li>
              <li className="hover:bg-green-600 text-white">Deworming</li>
              <li className="hover:bg-green-600 text-white">Spay & Neuter</li>
              <li className="hover:bg-green-600 text-white">
                Emergency Surgery
              </li>
              <li className="hover:bg-green-600 text-white">
                Orthopedic Surgery
              </li>
              <li className="hover:bg-green-600 text-white">Ultrasonography</li>
              <li className="hover:bg-green-600 text-white">
                Microscopic Examination
              </li>
              <li className="hover:bg-green-600 text-white">
                X-Ray & Cytology
              </li>
              <li className="hover:bg-green-600 text-white">
                Pathological Examination
              </li>
              <li className="hover:bg-green-600 text-white">
                Migration Consultancy
              </li>
              <li className="hover:bg-green-600 text-white">
                Postoperative Care
              </li>
              <li className="hover:bg-green-600 text-white">
                Grooming & Medication
              </li>
              <li className="hover:bg-green-600 text-white">
                Food & Accessories
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeService;
