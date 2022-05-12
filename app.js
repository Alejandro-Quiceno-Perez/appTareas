// Para nosotros obtener cosas del html los podemos llamar con document.getElementById() 
// Luego podemos agregar una escucha al evento que nosotros queremos hacer en este caso 
// .addEventListener()
document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title,
        description
    };

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;


        tasksView.innerHTML += ` <div class="card mb-2">
            <div class="card-body">
                <spam>${title} - ${description} </spam>
            <div class="d-grid justify-content-md-end">
                <a class="btn btn-danger" onclick="deleteTask('${title}')">Eliminar</a>
            </div>
                
            </div>
        </div> `

    }
}

function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

getTasks();



// para prevenir que nuestra pagina se recargue cada que le damos click a submit lo podemos hacer
// agregando un evento y al evento ponerle el codigo e.preventDefault()




//localStorage.setItem('tasks', JSON.stringify(task));

// Para optener este evento de localStorage →

// console.log(JSON.parse(localStorage.getItem('tasks')));