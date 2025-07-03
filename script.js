const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.textContent = '×';

    deleteBtn.addEventListener('click', () => {
        li.classList.add('removing');
        li.addEventListener('animationend', () => li.remove());
    });

    span.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function addTodo() {
    const text = input.value.trim();
    if (text) {
        const item = createTodoItem(text);
        list.appendChild(item);
        input.value = '';
        input.focus();
    }
}

addBtn.addEventListener('click', addTodo);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
