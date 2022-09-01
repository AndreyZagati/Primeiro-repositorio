let readline = require("readline-sync");
let notas = [];
let soma = 0


function semPreenchimento (a) {
    let tentativa = 3;
    for (let index = 0; index < 3; index++) {
            if (!a) {
                if (tentativa > 1) {
                    console.log("Valor inválido, você possui mais ", tentativa, " tentativas");
                    a = readline.question("Digite novamente: ");
                }   else {
                        console.log("Valor inválido, você possui mais ", tentativa, " tentativa");
                    a = readline.question("Digite novamente: ");
                    }
                tentativa = tentativa - 1
            }   else {
                    index = 4
                }
    }
    if (!a) {
        console.log("Não foi possivel continuar");
        process.exit(0);
    }    
}

function semPreenchimentoNotas (a) {
    let tentativa = 3;
    for (let index = 0; index < 3; index++) {
            if (!a) {
                if (tentativa > 1) {
                    console.log("Valor inválido, você possui mais ", tentativa, " tentativas");
                    a = readline.question("Digite novamente: ");
                }   else {
                        console.log("Valor inválido, você possui mais ", tentativa, " tentativa");
                    a = readline.question("Digite novamente: ");
                    }
                tentativa = tentativa - 1
            }   else {
                    index = 4
                }
    }
    if (!a) {
        console.log("Não foi possivel continuar");
        process.exit(0);
    } else {
        return a
    }
}

function tratamentoNotas (a) {
    let tentativa = 3;
    
    for (let index = 0; index < 3; index++) {
            if (a < 0 || a > 100) {
                if (tentativa > 1) {
                    console.log("Valor inválido, você possui mais ", tentativa, " tentativas");
                    a = readline.question("Digite novamente: ");
                } else {
                        console.log("Valor inválido, você possui mais ", tentativa, " tentativa");
                        a = readline.question("Digite novamente: ");
                    }
            } else if (!a) {
                if (tentativa > 1) {
                    console.log("Valor inválido, você possui mais ", tentativa, " tentativas");
                    a = readline.question("Digite novamente: ");
                } else {
                        console.log("Valor inválido, você possui mais ", tentativa, " tentativa");
                        a = readline.question("Digite novamente: "); } 
                            tentativa = tentativa - 1 
                             } else {
                                 index = 4
                                     }
    if (a < 0 || a > 100) {
        console.log("Não foi possivel continuar");
        process.exit(0);
    } else {
        return a
    }
}}


let aluno = readline.question("Digite o nome do aluno: ");

semPreenchimento(aluno)

let sexoAluno = readline.question("Digite o sexo do Aluno [M/F]: ");

semPreenchimento(sexoAluno)

let professor = readline.question("Digite o nome do Professor: ");

semPreenchimento(professor)

let sexoProfessor = readline.question("Digite o sexo do Aluno [M/F]: ");

semPreenchimento(sexoProfessor)

let curso = readline.question("Digite o nome do curso: ");

semPreenchimento(curso)

let disciplina = readline.question("Digite o nome da disciplina: ")

semPreenchimento(disciplina)



for (let index = 0; index < 4; index++) {
    notas[index] = readline.question(`Digite a ${index + 1}.o nota: `);
    notas[index] = tratamentoNotas(notas[index])
}

for (let index = 0; index < notas.length; index++) {
    console.log(notas[index])
}
/*
let nota1 = readline.question("Digite a primeira nota: ");

semPreenchimento(nota1)
tratamentoNotas(nota1)

let nota2 = readline.question("Digite a segunda nota: ");

semPreenchimento(nota2)
tratamentoNotas(nota2)

let nota3 = readline.question("Digite a terceira nota: ");

semPreenchimento(nota3)
tratamentoNotas(nota3)

let nota4 = readline.question("Digite a quarta nota: ");

semPreenchimento(nota4)
tratamentoNotas(nota4)*/
