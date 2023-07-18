import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const BotaoProximo = (props) => {
  return (
    <button
      type="button"
      onClick={props.funcaoAvancar}
      disabled={props.invisivel}
      className="rounded bg-primary text-white 
      py-3 px-6 text-base font-semibold tracking-wide 
       sm:text-sm flex gap-2 items-center justify-center
       disabled:bg-gray-400 "
    >
      PRÓXIMO
      <HiArrowNarrowRight className="text-lg" />
    </button>
  );
};

export default BotaoProximo;
