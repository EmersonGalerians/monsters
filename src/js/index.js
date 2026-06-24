"strict mode"

import { hello } from './utils';

const index = (() => {
  // VARIÁVEIS GLOBAIS
  const name = 'Escopo de módulo';
  
  // FUNÇÕES
  function test() {
    alert(name);
  }
  
  function helloFunction() {
    hello(name);
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

document.addEventListener('DOMContentLoaded', index.init);