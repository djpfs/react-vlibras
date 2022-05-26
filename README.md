# vlibras

Lib React que ajuda você a implementar o VLibras no seu site.

Esse componente segue os padrões fornecidos na [documentação do vlibras](https://www.vlibras.gov.br/doc/widget/index.html).

> Os surdos enfrentam bastante dificuldade para ler, escrever e se comunicar na língua oral do seu país. Dessa forma, para tentar reduzir esses problemas, o objetivo da ferramenta computacional de código aberto, denominada VLibras Widget, consiste em traduzir conteúdos do Português Brasileiro para a Língua Brasileira de Sinais (LIBRAS), tornando websites acessíveis a pessoas surdas. -- [Visão geral vlibras](https://www.vlibras.gov.br/doc/widget/introduction/overview.html)

## Instalação

```shell
npm install -S @djpfs/react-vlibras
# or
yarn add @djpfs/react-vlibras
```

## Como usar

React (App.js)

![React](/public/assets/react.png)

NextJs (index.jsx)

![NextJs](/public/assets/nextjs.png)

**Parametros**

Você pode usar a propriedade `forceOnload` para forçar que o VLibras seja carregado a partir de decisões assíncronas, ja que por padrão ele é executado no evento `onload`.

```typescript
import VLibras from './index'

function App() {
  return (
    <div className="App">
      <VLibras forceOnload={true} />
      <header className="App-header">
        <h1>Teste</h1>
      </header>
    </div>
  )
}

export default App
```

Confira melhor a motivação: [gg-martins091/pull/9](https://github.com/djpfs/react-vlibras/pull/9)

## Resultado

![Rsultado 1](/public/assets/result1.png)

![Rsultado 2](/public/assets/result2.png)

## Contribuindo

- De erros de digitação na documentação à codificação de novos recursos;
- Verifique os issue em aberto ou abra um novo issue para iniciar uma discussão sobre sua ideia de recurso ou o bug que você encontrou;
- Dê um fork no repositório, fazendo as alterações e enviando um PR;

Lib e README baseado no: [@vue_a11y](https://raw.githubusercontent.com/vue-a11y/vue-vlibras/)
Template package: [https://github.com/tomchen/example-typescript-package](example-typescript-package)

## Contribuidores

<a href="https://github.com/djpfs/react-vlibras/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=djpfs/react-vlibras" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

_Obrigado ao [gg-martins091](https://github.com/gg-martins091) pela contribuição._

**Obrigado por usar e fazer a web mais acessível**
