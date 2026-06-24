export class Monsters {
  #monsters = [];

  constructor() {}

  async getAll() {
    this.#monsters = await fetch('/database.json').then(res => res.json());

    console.log(this.#monsters);
  }

  getMonsters() {
    return this.#monsters;
  }

  /*
  criação
  edição
  deleção
  listar todos os montros
  busca por id
  busca com filtragem
  */
}