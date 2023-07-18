import React from 'react'

const FooterCheckout = () => {
  return (
    <div className="relative col-span-full flex flex-col justify-end py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-18">
          <div>
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
              alt="imagem de um avião como fundo da página"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#27A4AA] to-[#227076] opacity-80"></div>
          </div>
          <div className="relative text-white ">
            
            <img
              src="https://www.wizzioficial.com/wp-content/uploads/2022/03/marca-horizontal-branca-e-verde-1024x397.png"
              alt="logo da wizzi"
              className="max-h-16"
            />
            <h3 className="mb-5 text-sm mt-4">
              Desafio técnico - Página de checkout de viagem
            </h3>
          </div>
          <div className="relative mt-10 flex">
            <p className="flex flex-row items-center gap-1 text-sm">
              <span className="text-white">Feito por</span>
              <a
                href={"https://www.linkedin.com/in/rodrigo--medeiros/"}
                className="font-bold text-white"
              >
                Rodrigo Medeiros
              </a>
            </p>
          </div>
        </div>
  )
}

export default FooterCheckout