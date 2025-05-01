import React from "react";

const ButtonEffect1 = ({ word }: { word: string }) => {
  console.log(word);
  return (
    <div className="flex justify-center mt-12">
      <button className="group relative overflow-hidden px-6 pt-2 py-2 border border-gray-400 text-brand-primary rounded-full transition-all duration-300">
        <span className="relative pb-7 z-10 transition-colors duration-300 group-hover:text-white">
          {word}
        </span>
        <span className="absolute inset-0 z-0 bg-brand-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
      </button>
    </div>
  );
};

export default ButtonEffect1;
