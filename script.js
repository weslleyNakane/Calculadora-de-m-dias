const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="img/aprovado.png" alt="emoji festejando"> `;
const imgReprovado = `<img src="img/reprovado.png" alt="emoji decepcionado"/>`;
const atividades = [];
const notas = [];
const spamAprovado = `<span class = "resultado aprovado">Aprovado</spam>`;
const spamReprovado = `<span class = "resultado reprovado">Reprovado</spam>`;
const notaMinima = parseFloat(prompt("Digite a nota minima."));

let linhas = "";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha() {

    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");
    //criando condicao para verificar se o nome ja existe,caso ja tenha nao adicionar
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade : ${inputNomeAtividade.value} Ja foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += "</tr>"

        linhas += linha;
    }
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
//codigo para fazer a soma das notas
function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    document.getElementById("media-final-valor").innerHTML = mediaFinal;
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado;
    console.log(mediaFinal);
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
//final do codigo de soma das notas 