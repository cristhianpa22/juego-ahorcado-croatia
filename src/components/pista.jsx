import React from "react";

export function Pista({pista }){
    if(!pista) return null;

    return (
    <div className="bg-[#202F4F] border-2 border-[#D7B472] rounded-xl p-5 my-4 max-w-md mx-auto text-center">
      <span className="text-md font-bold uppercase tracking-wider text-indigo-500 block mb-1">
        💡 clue:
      </span>
      <p className="text-md md:text-2xl  font-semibold italic text-white">
        "{pista}"
      </p>
    </div>
  );
}