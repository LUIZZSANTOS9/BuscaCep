//Criar a função para coletar o CEP

function coletar() {
    let input = document.querySelector('.Input-Cep').value
    console.log(input)
    Dados(input)
}

//função para consumir API via CEP
async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    exibirdados(dados)
}
//Função dados na tela

function exibirdados(dados) {
    document.querySelector('.estado').value = dados.uf
    document.querySelector('.cidade').value = dados.localidade
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.DDD').value = dados.ddd
}