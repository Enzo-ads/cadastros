const profissionais = [
    {
        nome: "Ana Silva",
        profissao: "Desenvolvedor(a) de Software"
    },
    {
        nome: "Carlos Mendes",
        profissao: "Engenheiro(a) Civil"
    },
    {
        nome: "Mariana Costa",
        profissao: "Médico(a)"
    },
    {
        nome: "Lucas Oliveira",
        profissao: "Designer UI/UX"
    },
    {
        nome: "Fernanda Lima",
        profissao: "Advogado(a)"
    }
];

const formulario = document.getElementById("formProfissional");
const campoNome = document.getElementById("nome");
const campoProfissao = document.getElementById("profissao");
const corpoTabela = document.getElementById("corpoTabela");

function exibir() {
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < profissionais.length; posicao++) {
        const profissional = profissionais[posicao];

        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao + 1}</td>
                <td>${profissional.nome}</td>
                <td>${profissional.profissao}</td>
            </tr>
        `;
    }
}

exibir();

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const novoProfissional = {
        nome: campoNome.value.trim(),
        profissao: campoProfissao.value
    };

    profissionais.push(novoProfissional);

    // Limpa os campos após cadastrar
    campoNome.value = "";
    campoProfissao.value = "";

    exibir();
});