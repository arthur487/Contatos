const form = document.getElementById('form-numero');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    

});

function addlines() {
    const InputNome = document.getElementById('Nome-De-Contato');
    const InputNota = document.getElementById('Contact-Number');

    let linha = '<tr>';
    linha += `<td>${InputNome.value}</td>`;
    linha += `<td>${InputNota.value}</td>`;
linha += '</tr>';


    linhas += linha;
    ContactName.value = '';
    ContactNumero.value = '';
}

function UpdateTable() {
    const Tbody = document.querySelector('tbody');
    Tbody.innerHTML = linhas;
}