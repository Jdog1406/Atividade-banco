class Banco {
    constructor(nome, cnpj, fone, agencia) {
        this._nome = nome;
        this._cnpj = cnpj;
        this._fone = fone;
        this._agencia = agencia;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get cnpj() {
        return this._cnpj;
    }

    set cnpj(cnpj) {
        this._cnpj = cnpj;
    }

    get fone() {
        return this._fone;
    }

    set fone(fone) {
        this._fone = fone;
    }

    get agencia() {
        return this._agencia;
    }

    set agencia(agencia) {
        this._agencia = agencia;
    }
}

class BancoHeranca extends Banco {
    constructor(nome, cnpj, fone, agencia, tipo) {
        super(nome, cnpj, fone, agencia);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }
}

let B1 = new BancoHeranca("Santonder", 4080290325400, 40289232, 8456, "Comercial");
let B2 = new BancoHeranca("Brodusco", 4568792541209, 89214567, 2549, "Investimento");
let B3 = new BancoHeranca("Nibenk", 4871234659808, 32104761, 1264, "Poupança");
let B4 = new BancoHeranca("Itou", 9568473240103, 82549876, 2446, "Comercial");

console.log(`${B1.nome} tem ${B1.cnpj} como cnpj, ${B1.fone} como telefone, ${B1.agencia} como agencia e é do tipo ${B1.tipo}`);
console.log(`${B2.nome} tem ${B2.cnpj} como cnpj, ${B2.fone} como telefone, ${B2.agencia} como agencia e é do tipo ${B2.tipo}`);
console.log(`${B3.nome} tem ${B3.cnpj} como cnpj, ${B3.fone} como telefone, ${B3.agencia} como agencia e é do tipo ${B3.tipo}`);
console.log(`${B4.nome} tem ${B4.cnpj} como cnpj, ${B4.fone} como telefone, ${B4.agencia} como agencia e é do tipo ${B4.tipo}`);
