//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//FUNCTIONS

function addTodo(e){
        //Prevent from submiting
    e.preventDefault();
        //Create DIV TODO
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
        //Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    if(todoInput.value === '') return;
        //Create Completed Button
    const completedButton = document.createElement('button');
    completedButton.classList.add('completed-btn');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);
        //Create Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
        //Append Todo
    todoList.appendChild(todoDiv);        
    todoInput.value = '';
}

function removeTodo(e){
    const item = e.target;
    //DELETE TODO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //ANIMATION
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    //Check Mark
    if(item.classList[0]==='completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


//EVENT LITENERS

todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', removeTodo);