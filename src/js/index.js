"strict mode"

import { hello } from './utils';
import { MonsterDB } from './services/monsterdb.service';

const index = (() => {
  // VARIÁVEIS GLOBAIS
  const name = 'Escopo de módulo';
  const monsterDB = new MonsterDB();
  
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
    await monsterDB.getAll();

    console.log(monsterDB.getMonsters());
  }

  return {
    init
  }
})();

document.addEventListener('DOMContentLoaded', index.init);