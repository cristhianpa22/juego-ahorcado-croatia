import React from "react";

export function Pista({pista }){
    if(!pista) return null;

    return (
    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 my-4 max-w-md mx-auto text-center">
      <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 block mb-1">
        💡 Pista:
      </span>
      <p className="text-sm md:text-base text-indigo-950 font-medium italic">
        "{pista}"
      </p>
    </div>
  );
}