import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const BotaoVoltar = (props) => {
  return (
    <button
      type="button"
      onClick={props.funcaoVoltar}
      className="rounded bg-transparent border 
      border-[#2BB6BC] py-3 px-6 text-base font-semibold tracking-wide text-wizziColor 
       sm:text-sm flex gap-2 items-center justify-center"
    >
      <HiOutlineArrowNarrowLeft className="text-lg" />
      VOLTAR
    </button>
  );
};

export default BotaoVoltar;
