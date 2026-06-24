"strict mode"

import { hello } from './utils';

const tela2 = (() => {
  // VARIÁVEIS GLOBAIS
  
  // FUNÇÕES
  function test() {
    alert('Tela 2');
  }

  function helloFunction() {
    hello('Galerians 2');
  }
  
  // EVENTOS
  function events() {
    document.querySelector('#btn-test').addEventListener('click', test);
    document.querySelector('#btn-hello').addEventListener('click', helloFunction);
  }

  // INICIALIZAÇÃO
  function init() {
    events();
  }

  return {
    init
  }
})();

document.addEventListener('DOMContentLoaded', tela2.init);