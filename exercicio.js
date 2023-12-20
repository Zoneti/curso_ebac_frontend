class Aluno{
    constructor(nomeAluno, notaAluna) {
        this.nome = nomeAluno;
        this.nota = notaAluna;
    }
}

const aluno1 = new Aluno('Aluno 1', 2);
const aluno2 = new Aluno('Aluno 2', 6);
const aluno3 = new Aluno('Aluno 3', 7);
const aluno4 = new Aluno('Aluno 4', 5);
const aluno5 = new Aluno('Aluno 5', 1);
const aluno6 = new Aluno('Aluno 6', 10);
const aluno7 = new Aluno('Aluno 7', 9);
const aluno8 = new Aluno('Aluno 8', 3);
const aluno9 = new Aluno('Aluno 9', 4);

const alunos = [];

alunos.push(aluno1);
alunos.push(aluno2);
alunos.push(aluno3);
alunos.push(aluno4);
alunos.push(aluno5);
alunos.push(aluno6);
alunos.push(aluno7);
alunos.push(aluno8);
alunos.push(aluno9);

const filtroAlunoN6 = (aluno, indice) => aluno.nota >= 6;

const alunosN6 = alunos.filter(filtroAlunoN6);

console.log(alunosN6);