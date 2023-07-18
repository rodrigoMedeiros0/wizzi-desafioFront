import React, { useState } from "react";
//react icons
import { IoIosAirplane } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
//react hook-form
import { useForm, SubmitHandler } from "react-hook-form";
//google autocomplete
import { usePlacesWidget } from "react-google-autocomplete";
//component User Interface
import FooterCheckout from "../../components/footerCheckout/FooterCheckout";
import MensagemDeErro from "../../components/mensagemDeErro/MensagemDeErro";
import BotaoVoltar from "../../components/botaoVoltar/BotaoVoltar";
import BotaoAvancar from "../../components/botaoProximo/BotaoProximo";
import BotaoSubmit from "../../components/botaoSubmit/BotaoSubmit";
import AnimacaoAviao from "../../components/animacaoAviao/AnimacaoAviao";

const Checkout = () => {
  const [formPasso, setFormPasso] = useState(0);
  const {
    watch,
    register,
    formState: { errors, isValid },
    getValues,
    setValue,
    handleSubmit,
  } = useForm({ mode: "all" });

  const proximoPasso = () => {
    setFormPasso((passo) => passo + 1);
  };
  const voltarPasso = () => {
    setFormPasso((passo) => passo - 1);
  };

  const posicaoJustify = () => {
    if (formPasso === 0) {
      return "justify-end";
    } else {
      return "justify-between";
    }
  };

  const renderBotaoVoltar = () => {
    if (formPasso > 0 && formPasso < 3) {
      return <BotaoVoltar funcaoVoltar={voltarPasso} />;
    } else {
      return undefined;
    }
  };

  //função para mostrar os botoões voltar, avançar e submit
  const renderBotaoAvancar = () => {
    if (formPasso < 2) {
      return <BotaoAvancar funcaoAvancar={proximoPasso} invisivel={!isValid} />;
    } else {
      return undefined;
    }
  };

  const renderBotaoSubmit = () => {
    if (formPasso === 2) {
      return <BotaoSubmit ativado={!isValid} />;
    } else {
      return undefined;
    }
  };

  //função para acrescentar o n° de adultos e crianças
  const handleMenosAdultos = () => {
    if (Number(getValues("adulto") - 1) < 1) {
      return "";
    } else {
      setValue("adulto", Number(getValues("adulto") - 1));
    }
  };

  const handleMaisAdultos = () => {
    setValue("adulto", 1 + Number(getValues("adulto")));
  };

  const handleMenosCriancas = () => {
    if (Number(getValues("criancas") - 1) < 0) {
      return "";
    } else {
      setValue("criancas", Number(getValues("criancas") - 1));
    }
  };

  const handleMaisCriancas = () => {
    setValue("criancas", 1 + Number(getValues("criancas")));
  };

  //função para enviar formulario
  const enviarFormulario = (values) => {
    console.log(values);
    proximoPasso();
  };

  return (
    <div className="relative w-full bg-slate-100">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-18 ">
          <div className="mx-auto w-full max-w-lg">
            {formPasso < 3 && (
              <h5 className="text-xs  text-gray-500">
                ETAPA {formPasso + 1} DE 3
              </h5>
            )}

            <span className="mt-2 block h-1 w-10 bg-primary sm:w-20"></span>

            <h1 className="relative text-2xl sm:text-3xl font-bold mt-4  text-gray-500">
              Encontre as melhores passagens
            </h1>
            <h6 className="mt-2  text-gray-500">
              {formPasso === 0 && "Escolha o destino e a data"}
              {formPasso === 1 && "Informação dos passageiros"}
              {formPasso === 2 && "Revise as informações da viagem"}
            </h6>
            <form
              className="mt-10 flex flex-col space-y-4"
              onSubmit={handleSubmit(enviarFormulario)}
            >
              {/* section 0 - 1° */}
              {formPasso === 0 && (
                <section className="w-full flex flex-col gap-6">
                  <div>
                    <label
                      htmlFor="origem"
                      className="text-xl font-semibold text-gray-500 mt-2"
                    >
                      Origem
                    </label>
                    <input
                      type="text"
                      id="origem"
                      name="origem"
                      placeholder="Local de origem"
                      className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-400 shadow-sm outline-none transition 
                      ${
                        errors.origem
                          ? " border border-red-600 "
                          : "focus:ring-2 focus:ring-wizziColor"
                      } `}
                      {...register("origem", {
                        required: "Por favor, insira o local de origem.",
                        minLength: {
                          value: 3,
                          message: "Local inválido, ascrescente mais letras.",
                        },
                        pattern: {
                          value:
                            "^(?:[A-Za-z]{2,}(?:(.s|'ss|s?-s?|s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$",
                          message:
                            "Digite o local de origem, sem caracteres especiais.",
                        },
                      })}
                    />
                    {errors.origem && (
                      <MensagemDeErro>{errors.origem.message}</MensagemDeErro>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="destino"
                      className="text-xl font-semibold text-gray-500 mt-2"
                    >
                      Destino
                    </label>
                    <input
                      type="text"
                      id="destino"
                      name="destino"
                      placeholder="Local de destino"
                      className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-400 shadow-sm outline-none transition 
                      ${
                        errors.destino
                          ? " border border-red-600 "
                          : "focus:ring-2 focus:ring-wizziColor"
                      } `}
                      {...register("destino", {
                        required: "Por favor, insira o local de origem.",
                        minLength: {
                          value: 3,
                          message: "Local inválido, ascrescente mais letras.",
                        },
                        pattern: {
                          value:
                            "^(?:[A-Za-z]{2,}(?:(.s|'ss|s?-s?|s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$",
                          message:
                            "Digite o local de destino, sem caracteres especiais.",
                        },
                      })}
                    />
                    {errors.destino && (
                      <MensagemDeErro>{errors.destino.message}</MensagemDeErro>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="ida"
                      className="text-xl font-semibold text-gray-500"
                    >
                      Data de ida
                    </label>
                    <input
                      type="date"
                      id="ida"
                      name="ida"
                      className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-400 shadow-sm outline-none transition 
                        ${
                          errors.ida
                            ? " border border-red-600 "
                            : "focus:ring-2 focus:ring-wizziColor"
                        }`}
                      {...register("ida", {
                        required: "Por favor, insira uma data.",
                      })}
                    />
                    {errors.ida && (
                      <MensagemDeErro>{errors.ida.message}</MensagemDeErro>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="volta"
                      className="text-xl font-semibold text-gray-500"
                    >
                      Data de volta
                    </label>
                    <input
                      type="date"
                      id="volta"
                      name="volta"
                      className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-400 shadow-sm outline-none transition 
                      ${
                        errors.volta
                          ? " border border-red-600 "
                          : "focus:ring-2 focus:ring-wizziColor"
                      } `}
                      {...register("volta", {
                        required: "Por favor, insira uma data.",
                      })}
                    />
                    {errors.volta && (
                      <MensagemDeErro>{errors.volta.message}</MensagemDeErro>
                    )}
                  </div>
                </section>
              )}
              {/* section 1 - 2°   */}
              {formPasso === 1 && (
                <section className="w-full flex flex-col gap-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="text-xl font-semibold text-gray-500"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Nome completo"
                      className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-400 shadow-sm outline-none transition 
                      ${
                        errors.nome
                          ? " border border-red-600 "
                          : "focus:ring-2 focus:ring-wizziColor"
                      } `}
                      {...register("nome", {
                        required: "Por favor, insira um nome.",
                        minLength: {
                          value: 2,
                          message: "Nome inválido, ascrescente mais letras.",
                        },
                        pattern: {
                          value: /^([\w]{3,})+\s+([\w\s]{3,})+$/i,
                          message:
                            "Digite o nome completo, sem caracteres especiais.",
                        },
                      })}
                    />
                    {errors.nome && (
                      <MensagemDeErro>{errors.nome.message}</MensagemDeErro>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xl font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="exemplo@email.com"
                      className={`mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-400 shadow-sm outline-none transition 
                      ${
                        errors.nome
                          ? " border border-red-600 "
                          : "focus:ring-2 focus:ring-wizziColor"
                      } `}
                      {...register("email", {
                        required: "Por favor, insira o e-mail.",
                        minLength: {
                          value: 5,
                          message: "E-mail com caracteres insuficientes.",
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Insira um e-mail válido.",
                        },
                      })}
                    />
                    {errors.email && (
                      <MensagemDeErro>{errors.email.message}</MensagemDeErro>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="nome"
                      className="text-xl font-semibold text-gray-500"
                    >
                      Quantidade de adultos
                    </label>
                    <p className="text-gray-500">12 anos ou mais</p>
                    <div className="flex flex-row justify-start gap-4  items-center py-2">
                      <button
                        type="button"
                        className="rounded bg-gray-400 py-3 px-4 text-base font-semibold tracking-wide text-white
                                    text-xl flex gap-2 items-center justify-center"
                        onClick={handleMenosAdultos}
                      >
                        <FaMinusCircle />
                      </button>
                      <input
                        type="number"
                        id="adultos"
                        name="adultos"
                        defaultValue={1}
                        className="block w-[20%] rounded border-gray-300 py-3 px-4 text-sm  shadow-sm outline-none transition focus:ring-2 focus:ring-wizziColor"
                        {...register("adulto", {
                          min: 1,
                          max: 20,
                        })}
                      />
                      <button
                        type="button"
                        className="rounded bg-primary py-3 px-4 text-base font-semibold tracking-wide text-white
                        text-xl flex gap-2 items-center justify-center"
                        onClick={handleMaisAdultos}
                      >
                        <FaCirclePlus />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="criancas"
                      className="text-xl font-semibold text-gray-500"
                    >
                      Quantidade de crianças
                    </label>
                    <p className="text-gray-500">De 2 a 11 anos</p>
                    <div className="flex flex-row justify-start gap-4  items-center py-2">
                      <button
                        type="button"
                        className="rounded bg-gray-400 py-3 px-4 text-base font-semibold tracking-wide text-white
                                    text-xl flex gap-2 items-center justify-center"
                        onClick={handleMenosCriancas}
                      >
                        <FaMinusCircle />
                      </button>
                      <input
                        type="number"
                        id="criancas"
                        name="criancas"
                        defaultValue={0}
                        className="block w-[20%] rounded border-gray-300 py-3 px-4 text-sm  shadow-sm outline-none transition focus:ring-2 focus:ring-wizziColor"
                        {...register("criancas", {
                          min: 0,
                          max: 20,
                        })}
                      />
                      <button
                        type="button"
                        className="rounded bg-primary py-3 px-4 text-base font-semibold tracking-wide text-white
                        text-xl flex gap-2 items-center justify-center"
                        onClick={handleMaisCriancas}
                      >
                        <FaCirclePlus />
                      </button>
                    </div>
                  </div>
                </section>
              )}
              {/* section 2 - 3°   */}
              {formPasso === 2 && (
                <section className="w-full flex flex-col gap-4">
                  <div className="flex flex-row justify-between sm:justify-between items-center">
                    <p className="text-gray-500 flex flex-col gap-1 text-sm sm:text-base">
                      Origem:{" "}
                      <span className="font-bold">{getValues("origem")}</span>
                    </p>
                    <div className="text-lg sm:text-4xl flex flex-row items-center gap-2 text-gray-500">
                      - - -<IoIosAirplane />- - -
                    </div>
                    <p className="text-gray-500 flex flex-col gap-1 text-sm text-end">
                      Destino:{" "}
                      <span className="font-bold">{getValues("destino")}</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between sm:justify-between items-center">
                    <p className="text-gray-500 flex flex-col gap-1 text-sm">
                      Data de ida:{" "}
                      <span className="font-bold">
                        {getValues("ida").split("-").reverse().join("/")}
                      </span>
                    </p>
                    <p className="text-gray-500 flex flex-col gap-1 text-sm text-end">
                      Data de volta:
                      <span className="font-bold">
                        {getValues("volta").split("-").reverse().join("/")}
                      </span>
                    </p>
                  </div>

                  <p className="text-gray-500 flex flex-col gap-1 text-sm">
                    Nome completo:
                    <span className="font-bold">{getValues("nome")}</span>
                  </p>

                  <p className="text-gray-500 flex flex-col gap-1 text-sm">
                    Email:{" "}
                    <span className="font-bold">{getValues("email")}</span>
                  </p>

                  <div className="flex flex-row justify-between sm:justify-between items-center">
                    <p className="text-gray-500 flex flex-col gap-1 text-sm">
                      N° adultos:{" "}
                      <span className="font-bold">{getValues("adulto")}</span>
                    </p>
                    <p className="text-gray-500 flex flex-col gap-1 text-sm text-end">
                      N° crianças:
                      <span className="font-bold">{getValues("criancas")}</span>
                    </p>
                  </div>
                  <div className="text-gray-500 flex flex-row gap-4 text-sm">
                    <input
                      type="checkbox"
                      className="accent-wizziColor"
                      {...register("termos", {
                        required: true,
                      })}
                    />
                    <label>
                      Eu aceito os{" "}
                      <a className="text-[#2BB6BC] underline" href="/">
                        Termos e condições
                      </a>
                      .
                    </label>
                  </div>
                  <div className="text-gray-500 flex flex-row gap-4 text-sm">
                    <input
                      type="checkbox"
                      className="accent-wizziColor"
                      name="condicoes"
                      {...register("condicoes", {
                        required: true,
                      })}
                    />
                    <label>
                      Eu aceito a{" "}
                      <a className="text-wizziColor underline" href="/">
                        Política de privacidade
                      </a>
                      .
                    </label>
                  </div>
                </section>
              )}
              {/* section 3 - 4° - ultima   */}
              {formPasso === 3 && (
                <section className="w-full flex flex-col gap-4 justify-center items-center">
                  <AnimacaoAviao />
                  <h2 className="text-2xl font-bold text-gray-500">
                    Seu pedido foi realizado!
                  </h2>
                </section>
              )}

              <div
                className={`flex flex-row ${posicaoJustify()} items-end py-5 `}
              >
                {renderBotaoVoltar()}
                {renderBotaoAvancar()}
                {renderBotaoSubmit()}
              </div>
            </form>
          </div>
        </div>
        <FooterCheckout />
      </div>
    </div>
  );
};

export default Checkout;
