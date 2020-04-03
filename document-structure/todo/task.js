const taskInput = document.getElementById('task__input');
const taskAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

const addItem = function(e) {
    e.preventDefault();
    let text = taskInput.value;

    if(taskInput.value) {
        tasksList.insertAdjacentHTML('afterend', `
        <div class="task">
          <div class="task__title">
            ${text}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`);

        taskInput.value = '';

        const taskRemove = Array.from(document.querySelectorAll('.task__remove'));
        taskRemove.forEach(el => {
            el.addEventListener('click', removeItem);
        });
    }
};

taskAdd.addEventListener('click', addItem);
taskInput.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addItem();
    }
});

const removeItem = function(e) {
    const taskRemove = e.target.closest('.task');
    taskRemove.remove();
};

