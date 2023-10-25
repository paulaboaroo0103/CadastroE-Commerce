document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos
    var email = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var CPF = document.getElementById("cpf").value;
    var CEP = document.getElementById("cep").value;
    var endereco = document.getElementById("endereco").value;
    var numero = document.getElementById("numero").value;
    var complemento = document.getElementById("complemento").value;
    var cidade = document.getElementById("cidade").value;
    var bairro = document.getElementById("bairro").value;
    var estado = document.getElementById("estado").value;

    // Realiza a verificação do CEP (exemplo simplificado)
    /* if (cep === "12345-678") {
       cidade = "Exemploville";
       estado = "EX";
     }*/
    // Limpa os campos do formulário
    document.getElementById("cadastroForm").reset();
});

//Limpar Formulário
const limparFormulario = () => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Preenche campos do formulário
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

/*
Função para consumo de API utilizando a função do tipo assincrona
*/

const pesquisarCep = async () => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if (cepValido(cep.value)) {
        const dados = await fetch(url);
        const addres = await dados.json();

        if (addres.hasOwnProperty('erro')) {
            alert('CEP não encontrado');
        } else {
            preencherFormulario(addres);
        }
    } else {
        alert('CEP incorreto');
    }
}

// Adiciona um evento DOM, no input CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);