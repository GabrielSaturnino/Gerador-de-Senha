export const nome = 'Gabriel';
export const sobrenome = 'Coelho';
export const idade = 22;

export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}