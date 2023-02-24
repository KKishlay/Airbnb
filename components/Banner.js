import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://links.papareact.com/0fm"
          className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[400px] 2xl:h-[700px] w-screen"
        />
      </div>
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          className="text-purple-500 px-10 py-4 shadow-md rounded-full font-bold
                     my-3 hover:shadow-xl bg-white active:scale-90 transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </>
  );
};
export default Banner;
