import React from "react";

const HomeSectionCaed = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top h-full
            w-full"
          src="https://i.pinimg.com/550x/86/f6/e0/86f6e080c701806d05a1027e022fbcf7.jpg"
          alt=""
        />  
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
        <p className="mt-2 text-sm text-gray-500">
          Men solid pure cotton straight kurta
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCaed;
