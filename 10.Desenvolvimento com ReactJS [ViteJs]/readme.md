# Desenvolvimento com React.JS [usando Vite]

Neste episódio vamos aprender sobre o React Route utilizando o ViteJs para construir um e-commerce.

O Vite.js é uma ferramenta e um server de desenvolvimento que primeiramente foi desenvolvida para o desenvolviment web moderno. Foi desenvolvida para ser utilizada junto de frameworks como Vue.js e React.

Ele é importante pelos seguintes motivos:
- Desenvolvimento Rápido de servers;
- Usa módulos ES nativos para o desenvolvimento, minimizando possíveis conflitos.
- Optimizado para frameworks
- Plugin-based
- Estimula o tree shaking para eliminar códigos sem uso
- Apesar de ser otimizado para o desenvolvimento, ele também provê capabilidades para para a construção em produção.
- Configuração simplificada.


Após a instalação do NPM, vamos instalar as dependências do React Router

## React Router Dom

1. Para instalar no Vite.js, use o seguinte comando:

```bash
$ npm install react-router-dom localforage match-sorter sort-by
```

2. Após instalado, vamos para a segunda etapa, importar os componentes. Importante ressaltar que as modificações referentes às rotas devem ser feitas diretamente na pata **main.jsx**

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <ErrorPage /> //Vai para a página caso aconteça algum erro com o diretório que estamos chamando
  },
    {
    path: "/galeria",
    element: <div>galeria</div>,
    children: [ //children é o conceito de página que para chegar até a pagina children, você precisa passar pela página parent
      {
        path: "/galeria/:quadroId" //colocando os 2 pontos, você está informando que o "quadroId" na realidade é uma variável.
        element: <div>Quadro</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

```

Pr fim, para adicionar o link a um botão ou âncora, devemos usar o componente react chamado <Link>

```javascript

<button>
<link to={`/galeria`}>Clique para ir para a galeria</link>
</button>

<button>
<link to={`/galeria/1`}>Clique para acessar direto um quadro da galeria</link>
</button>

```

Repare que o primeir botão ele irá para uma galeria de fotos onde tem todos os quadros dispostos. No segundo botão vamos acionar uma terceira página, que apresentará o quadro da galeria que tem o Id 1.


## Usando SASS no projeto

Sass é um pré-processador de CSS que trabalha com as extensões scss e sass.

Para instalar o sass rodamos o seguinte comando: [Versão desenvolvedor]
```bash
sudo npm add -D sass
```

As principais utilidades do SASS são:
- Variáveis
- Nesting
- Partials
-- Modulos
-- Mixins
- Extensões
- Heranças
- Operadores

## Ciclo de vida de um componente

O ciclo de vida de um componente começa com a sua montagem, esta montage tem:
1. Construtor
2. Renderiza
3. Update do DOM

```javascript

componentDidMount(){
  console.log("Olá mundo")
}

```

O componentDidUpdate altera alguns componentes da página quando alguma variável de estado é atualizda ou props for incluída. Este cara é chamado para atualizar algo.

```javascript

//Com ele eu posso pegar a props ou o state que estava anteriormenete, e dependendo da mudança ele executa uma função. Por exemplo, cada vez que eu mudar de página alterar o title da página.
componentDidUpdate(prevProps, prevState){

}

```

Por fim temos o componentDidUnmount que executa assim que o componente é destruído. Ou seja, quando ele é removido da tela. Por exemplo, quando a pessoa sair da tela

```javascript


componentDidUpdate(){

}

```

Esta é uma forma que os sábios antigos fazia o que hoje nós chamamos de Hooks.

