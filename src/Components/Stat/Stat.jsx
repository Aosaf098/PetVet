import React from "react";

const Stat = () => {
  return (
    <>
      <div className="lg:w-2/3 mx-auto my-10">
        <div className="lg:w-1/2 mx-auto px-3">
          <h1 className="text-center lg:text-4xl text-3xl font-bold tracking-wider">
            Welcome to the PetVet
            <br />
            Vet Clinic & Services
          </h1>
        </div>
        <div className="w-full mt-14 flex lg:flex-row flex-col items-center gap-10 lg:gap-2">
          <div className="flex flex-col gap-6 items-center">
            <div className="w-32 mx-auto">
              <h3 className="text-6xl text-center text-green-500 font-bold">12+</h3>
            </div>
            <p className="text-center lg:w-11/12 w-3/4 text-muted-foreground">
              Over 12 years of medical experience to secure your pet’s health
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="w-32 mx-auto">
              <h3 className="text-6xl text-center text-green-500 font-bold">960</h3>
            </div>
            <p className="text-center lg:w-11/12 w-3/4 text-muted-foreground">
              The number of pets successfully treated in our vet clinic
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="w-32 mx-auto">
              <h3 className="text-6xl text-center text-green-500 font-bold">100%</h3>
            </div>
            <p className="text-center lg:w-11/12 w-3/4 text-muted-foreground">
              Love and professionalism is what we offer along with medical
              services
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stat;
