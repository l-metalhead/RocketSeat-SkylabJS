var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Carrega array atraves do metodo parse, com itens do storage
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';  // Reseta a lista

    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var pos = todos.indexOf(todo);  // Posicao do item no array

        linkElement.setAttribute('href', '#');  // # -> Sem efeito real
        linkElement.setAttribute('onclick', `deleteTodo(${pos})`);
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    // localStorage -> variavel global com chave-valor
    // JSON -> Objeto em JS no formato de String
    localStorage.setItem('list_todos', JSON.stringify(todos));
}