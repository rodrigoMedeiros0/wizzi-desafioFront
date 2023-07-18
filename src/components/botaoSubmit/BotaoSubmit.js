import React from "react";

const BotaoSubmit = (props) => {
  return (
    <button
      type="submit"
      className="rounded bg-primary text-white 
      py-3 px-6 text-base font-semibold tracking-wide 
       sm:text-sm flex gap-2 items-center justify-center disabled:bg-gray-400"
       
       disabled={props.ativado}
    >
      FINALIZAR
    </button>
  );
};

export default BotaoSubmit;
