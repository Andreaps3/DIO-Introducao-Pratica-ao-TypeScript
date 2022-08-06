/* // Como podemos melhorar o esse código usando TS? 

var pessoa1 = {};
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

var pessoa2 = {}
let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

var pessoa3 = {
let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

var pessoa4 = {
let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro" */

    enum Emprego{
        Atriz,
        Padeiro
    }   

   
interface People {
    nome: string,
    idade: number,
    profissao: Emprego,
}

const pessoa1: People ={
    nome: 'Maria',
    idade: 29,
    profissao: Emprego.Atriz
}

const pessoa2: People ={
    nome: 'Roberto',
    idade: 19,
    profissao: Emprego.Padeiro
}

const pessoa3: People ={
    nome: 'Laura',
    idade: 32,
    profissao: Emprego.Atriz
}

const pessoa4: People ={
    nome: 'Carlos',
    idade: 19,
    profissao: Emprego.Padeiro
}
  