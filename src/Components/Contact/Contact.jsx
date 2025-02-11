import { MapPin, Phone } from "lucide-react";
import LocationMap from "./locationMap";
import ContactInformation from "./ContactInformation";
import WorkingHours from "./WorkingHours";

const Contact = () => {
  return (
    <>
    <div className="lg:2/3 mx-auto">
        <h1 className="text-center text-4xl font-bold my-20">Where to Find Us</h1>
    </div>
      <div className="lg:w-2/3 mx-auto lg:my-8 flex lg:flex-row flex-col gap-7 justify-between items-center">
      
        <LocationMap />
        <div className="lg:w-1/2 p-4 flex flex-col gap-10">
          <WorkingHours />
          <ContactInformation />
        </div>
      </div>
    </>
  );
};

export default Contact;
