//Função que adiciona tarefa

function addTask() {

    //Título da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {
        
        //Clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //Adiciona título
        newTask.querySelector(".task-title").textContent = taskTitle;
        
        //Remover classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //Adiciona tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //Adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        //Adicionar o evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        //limpar texto
        document.querySelector("#task-title").value = "";
    }

}

//função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//função de completar tarefa
function completeTask(task) {
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();
    addTask();

});


