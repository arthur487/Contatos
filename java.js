const form = document.getElementById('form-numero');
const Names = [];
const Numero = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addlines();
    UpdateTable();
    check();
    

});

function addlines() {
    const Nome = document.getElementById('Nome-De-Contato');
    const Numeros = document.getElementById('Contact-Number');
    if (Names.includes(Nome.value)) {
        alert(`O numero do: ${Nome.value} ja foi salvo`); 
    } else { if (Numero.includes(parseFloat(Numeros.value))) {
        alert(`O numero: ${parseFloat(Numeros.value)} ja foi salvo`);
    } else {
    Names.push(Nome.value);
    Numero.push(parseFloat(Numeros.value));


    let linha = '<tr>';
    linha += `<td>${Nome.value}</td>`;
    linha += `<td>${Numeros.value}</td>`;
linha += '</tr>';


    linhas += linha;
    Nome.value = '';
    Numeros.value = '';
    }
}}

function UpdateTable() {
    const Tbody = document.querySelector('tbody');
    Tbody.innerHTML = linhas;
}
function check() {
    console.log(Names);
    console.log(Numero);
}
