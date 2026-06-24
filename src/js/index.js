"strict mode"

import { hello } from './utils';
import { Monsters } from './services/monster.service';

const index = (() => {
  // VARIÁVEIS GLOBAIS
  const name = 'Escopo de módulo';
  const monsters = new Monsters();
  
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
  async function init() {
    events();
    await monsters.getAll();

    console.log(monsters.getMonsters());
  }

  return {
    init
  }
})();

document.addEventListener('DOMContentLoaded', index.init);