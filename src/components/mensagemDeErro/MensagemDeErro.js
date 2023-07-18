import React from "react";
import { CgDanger } from "react-icons/cg";

const MensagemDeErro = ({children}) => {
  return (
    <p className="mt-2 text-xs bg-red-100 py-2 px-2 rounded flex items-center gap-2 my-auto text-red-950">
      <CgDanger className="text-base text-red-900" />
      {children}
    </p>
  );
};

export default MensagemDeErro;
