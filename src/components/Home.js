import React from "react";
import image from "../photos/4.jpg";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="w-full h-auto lg:flex sm:block font-serif">
          <div className="lg:w-1/2 p-16 sm:p-17 lg:px-13 lg:pt-52 lg:flex lg:justify-start lg:items-start lg:flex-col">
            <div className="text-5xl font-light lg:text-start text-center">
              Sahayata
            </div>
            <p className="lg:text-start text-center mt-2 lg:text-xl">
              A non-profit food management community that connects restaurants
              to NGOs to help reduce food waste and feed the needy. We believe
              that everyone deserves access to safe and nutritious food, and we
              are committed to working with our partners to make that happen.
            </p>
            {/* <p className="lg:text-start text-center mt-2 lg:text-lg">
             NGOs can then collect the food and
            distribute it to people who are struggling to put food on the table.
          </p> */}
          </div>
          <div className="h-auto">
            <img src={image} alt="bg img" className="lg:w-full lg:rounded sm:h-auto" />
          </div>
        </div>
      </div>
      <div className="container flex justify-center items-center lg:p-20 sm:text-center py-5">
        <div className="lg:p-8 p-0 lg:text-3xl font-serif text-sm lg:bg-[#ECEFF1] text-[#121212] lg:rounded-md">Meal Served : more than 1000 packets and counting...</div>
      </div>
    </>
  );
}
