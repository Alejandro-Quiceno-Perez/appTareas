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

    e.preventDefault()
}




// para prevenir que nuestra pagina se recargue cada que le damos click a submit lo podemos hacer
// agregando un evento y al evento ponerle el codigo e.preventDefault()




//localStorage.setItem('tasks', JSON.stringify(task));

// Para optener este evento de localStorage →

// console.log(JSON.parse(localStorage.getItem('tasks')));