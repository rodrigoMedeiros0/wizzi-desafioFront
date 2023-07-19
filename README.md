
  ![caputuraNote1](https://github.com/rodrigoMedeiros0/wizzi-desafioFront/assets/97979883/11fd9307-9294-4f04-a4c6-07889158e9d2)



## 💻 Sobre o projeto

Esse projeto é a versão final do desafio técnico de Front-end da empresa Wizzi. Esse projeto é uma página de formulário para que o usuário possa preencher e enviar seus dados.  

Acesse o deploy: https://wizzi-desafio.netlify.app/


---

## ⚙️ Funcionalidades

- [x] Etapa 1 :
  - Capturar os dados para saber onde o local de origem do usuário e seu destino 
  - Capturar os dados para saber onde a data de ida e volta do usuário
- [x] Página Issue:
  - Filtrar pos status
  - Entrar no repositório da issue 
  - Avançar página
  - Voltar página
  
---

## 🎨 Layout

O layout da aplicação:

<h1 align="center">
  
![capturaMob](https://github.com/rodrigoMedeiros0/wizzi-desafioFront/assets/97979883/eddb4296-4a53-45da-9b3a-4675f96f7af8)
![capturaTablet](https://github.com/rodrigoMedeiros0/wizzi-desafioFront/assets/97979883/084a68af-ff80-4a9e-a2b6-35a3f8a4757d)



</h1>

# 🚀 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


## 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/rodrigoMedeiros0/wizzi-desafioFront

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nome da pasta criada

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  [React](https://reactjs.org/)  
-   **[React](https://react.dev/)**
-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[useState](https://legacy.reactjs.org/docs/hooks-reference.html#usestate)**
-   **[Tailwind css](https://v1.tailwindcss.com/docs/installation)**
-   **[React Hook Form](https://react-hook-form.com/)**
-   **[react-lottie](https://www.npmjs.com/package/react-lottie)**




> Veja o arquivo  [package.json](https://github.com/rodrigoMedeiros0/wizzi-desafioFront/blob/main/package.json)

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)


## 📝 Melhorias futuras

-   **Utilizar uma API para pegar os dados dos aeroportos para utilizar de autocomplete para o campo input do local de origem e destino (eu tentei mas fui recusado, todas eram premuim e precisava passar no formulário de entrada**
-   **Melhorar a validade do campo do tipo data e mostrar uma data parecida com o site da latam, que mostra 3 meses de uma só vez**
