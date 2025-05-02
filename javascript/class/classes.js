class Cachorro {
    constructor(nome, idade, peso, vacinado) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.vacinado = vacinado;
    }

    latir() {
        console.log("Au au!");
    }
}

pitt = new Cachorro("Pitt", 5, 10, true);
pitt.latir();