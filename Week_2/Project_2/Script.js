const todoAdder = document.querySelector('#todoAdder');
const showAllBtn = document.getElementById('show-all');
const body = document.getElementById('main');
const buttons = document.querySelectorAll('.btn');
const pendingbtn = document.getElementById('pending');
const completedbtn = document.getElementById('completed-btn');
const todoContainer = document.getElementById('todoContainer');
const DeleteBtn = document.getElementsByClassName('delete-btn');
const optIcon = document.getElementsByClassName('material-symbols-outlined');
const clearAllBtn = document.getElementById('clear');
let todoList = [];
showAllBtn.classList.add('active');

// Utility function 1 for colour changing in filter buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.toggle('active');
    })
})

// Adding check uncheck event listener to every checkbox
const EventBinder = (checkBox) => {
    checkBox.addEventListener('change', (e) => {
        const myLabel = document.querySelector(`label[for="${e.target.name}"]`);
        
        if (e.target.checked === true) {
            todoList.forEach(todo => {
                if (todo.name === e.target.name) {
                    todo.status = true;
                    myLabel.classList.toggle('completed');
                }
            })
        }

        else {
            todoList.forEach(todo => {
                if (todo.name === e.target.name) {
                    todo.status = false;
                    myLabel.classList.toggle('completed');
                }
            })
        }
    })

    return checkBox;
}

// Function to show delete button on an event 
const IconEventAdder = (icon, delButton) => {
    icon.addEventListener('click', () => {

        if (delButton.style.display === '' || delButton.style.display === 'none') {
            delButton.style.display = 'block';
        } else if (delButton.style.display === 'block') {
            delButton.style.display = 'none';
        }
    });

}

// Delete button event adder 
const DelEventAdder = (delButton) => {

    delButton.addEventListener('click', () => {
        console.log('btn' + todoList[0].name);
        console.log(delButton.id);
        todoList = todoList.filter(todo => 'btn' + todo.name !== delButton.id);
        todoContainer.innerHTML = '';
        todoList.forEach(todo => {
            const todoI = newTodoCreater(todo.name, todo.status);
            todoContainer.appendChild(todoI);
        })

    })
}



// Utility function  to create a new todo item 
const newTodoCreater = (TodoText, status = false) => {
    const newTodo = document.createElement('div');
    newTodo.classList.add('todoItem');

    const newTodoLeft = document.createElement('div');
    newTodoLeft.classList.add('left');

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', TodoText);
    checkBox.setAttribute('name', TodoText);
    checkBox.classList.add('mycheckbox');
    checkBox.checked = status;
    checkBox = EventBinder(checkBox);

    const Label = document.createElement('label');
    Label.innerText = TodoText;
    Label.setAttribute('for', TodoText);

    if (checkBox.checked === true) { Label.classList.add('completed') }

    const icon = document.createElement('span');
    icon.innerText = 'more_horiz';
    icon.classList.add('material-symbols-outlined')



    const delButton = document.createElement('button');
    delButton.innerText = 'delete';
    delButton.classList.add('delete-btn');
    delButton.id = `btn` + TodoText;

    DelEventAdder(delButton);
    IconEventAdder(icon, delButton);

    icon.appendChild(delButton);

    newTodoLeft.appendChild(checkBox);
    newTodoLeft.appendChild(Label);

    newTodo.appendChild(newTodoLeft);
    newTodo.appendChild(icon);
    if (document.querySelector('.message'))
        body.removeChild(document.querySelector('.message'))
    return newTodo;
}

// Utility function  to display messages to the user
const MessageDisplay = (text) => {
    const msg = document.createElement('span');
    msg.classList.add('message');
    msg.style.marginTop = '20px'
    msg.innerText = text;
    body.appendChild(msg);
}

if (todoList.length === 0)
    MessageDisplay('You have no todos');

// Event to add new todo
todoAdder.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        const TodoText = todoAdder.value.trim();
        if (todoAdder.value === '') return;
        todoAdder.value = '';
        const todo = { name: TodoText, status: false };
        todoList.push(todo);
        const todoI = newTodoCreater(TodoText, false);
        todoContainer.appendChild(todoI);
    }
})

// Event to show all todos
showAllBtn.addEventListener('click', () => {
    todoContainer.innerHTML = '';
    todoList.forEach(todo => {
        const todoI = newTodoCreater(todo.name, todo.status);
        todoContainer.appendChild(todoI);
    })
})

// Event to show pending todos
pendingbtn.addEventListener('click', () => {
    const pendingTodos = todoList.filter(todo => todo.status === false);
    todoContainer.innerHTML = '';
    pendingTodos.forEach(todo => {
        const todoI = newTodoCreater(todo.name, todo.status);
        todoContainer.appendChild(todoI);
    })
})

// Event to show completed todos
completedbtn.addEventListener('click', () => {
    const completedTodos = todoList.filter(todo => todo.status === true);
    todoContainer.innerHTML = '';
    completedTodos.forEach(todo => {
        const todoI = newTodoCreater(todo.name, todo.status);
        todoContainer.appendChild(todoI);
    })
})


// Event to clear all todos
clearAllBtn.addEventListener('click', () => {
    todoList = [];
    todoContainer.innerHTML = '';
    MessageDisplay('You have no todos');
})



