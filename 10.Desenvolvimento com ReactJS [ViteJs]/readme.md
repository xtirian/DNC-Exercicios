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
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

```