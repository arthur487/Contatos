const form = document.getElementById('form-numero');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    

});

function addlines() {
    const ContactName = document.getElementById('Nome-De-Contato');
    const ContactNumero = document.getElementById('Contact-Number');

let linha = '<tr>'
linha += `<td>${ContactName.value}</td>`;
linha += `<td>${ContactNumero.value}</td>`;
linha += '</tr>';


    linhas += linha;
    ContactName.value = '';
    ContactNumero.value = '';
}

function UpdateTable() {
    const Tbody = document.querySelector('tbody');
    Tbody.innerHTML = linhas;
}