# vlibras

Lib React que ajuda você a implementar o VLibras no seu site.

Esse componente segue os padrões fornecidos na [documentação do vlibras](https://www.vlibras.gov.br/doc/widget/index.html).

> Os surdos enfrentam bastante dificuldade para ler, escrever e se comunicar na língua oral do seu país. Dessa forma, para tentar reduzir esses problemas, o objetivo da ferramenta computacional de código aberto, denominada VLibras Widget, consiste em traduzir conteúdos do Português Brasileiro para a Língua Brasileira de Sinais (LIBRAS), tornando websites acessíveis a pessoas surdas. -- [Visão geral vlibras](https://www.vlibras.gov.br/doc/widget/introduction/overview.html)

## Instalação

```shell
npm install -S @vue-a11y/vlibras
# or
yarn add @vue-a11y/vlibras
```

## Como usar

No seu projeto React

```vue
<template>
  <div id="app">
    <!-- header, navigation, and more -->
    <main id="main">
      <!-- content -->
    </main>
    <VLibras />
  </div>
</template>

<script>
import { VLibras } from '@vue-a11y/vlibras'

export default {
  name: 'App'
  components: {
    VLibras
  },
  //...
}
</script>
```

## Contribuindo

- De erros de digitação na documentação à codificação de novos recursos;
- Verifique os issue em aberto ou abra um novo issue para iniciar uma discussão sobre sua ideia de recurso ou o bug que você encontrou;
- Dê um fork no repositório, fazendo as alterações e enviando um PR;

Lib e README baseado no: [@vue_a11y](https://raw.githubusercontent.com/vue-a11y/vue-vlibras/)

**Obrigado por usar e fazer a web mais acessível**
