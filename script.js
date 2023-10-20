function Verificar(){
    let email = document.getElementById('email').value;
    let nome= document.getElementById('nome').value;
    let numero = document.getElementById('numero').value;
    let nascimento = document.getElementById('nascimento').value;
    let cpf = document.getElementById('cpf').value;
    let cep = document.getElementById('cep').value;
    let endereco  = document.getElementById('endereco').value;
    let complemento  = document.getElementById('casa').value;
    let cidade  = document.getElementById('cidade').value;
    let referencia = document.getElementById('referencia').value;
    
    if(!email || !nome || !numero || !nascimento || !cpf || !cep || !endereco || !complemento || !cidade || !referencia)
    alert("Por favor preencher todos os dados obrigatórios!")
    }