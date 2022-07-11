const subject = document.querySelector('.todo-item');
const task = document.querySelector('.task');
const time = document.querySelector('.time');
const submitBtn = document.querySelector('.submit');
const todoList = document.querySelector('#todo-list');


const opener = document.querySelector('#todo');
const container = document.getElementById('container');
const canceler = document.querySelector('.cancel');
const filteroption = document.querySelector('.filter-todo')


//eventListners
submitBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filteroption.addEventListener('click', filterTodo);


//functions
function addTodo(event){
    //prevents the form from submitting automatically
    event.preventDefault();

    //creating a todo div where the task added from the form will be appended
    const todoDiv = document.createElement('div');
    //giving the todoDiv a className
    todoDiv.classList.add('todo');


    //todoItems
    const todoItems = document.createElement('div');
    todoItems.classList.add('todoItems');
    todoDiv.appendChild(todoItems);


    //create the list of the todo's
    const subjects = document.createElement('h3');
    subjects.classList.add('h3');
    subjects.textContent = subject.value;
    //append the subject to the div
    todoItems.appendChild(subjects);


    
    //create the list of the todo's
    const tasks = document.createElement('h4');
    tasks.classList.add('h4');
    tasks.innerText = task.value;
    //append the tasks to the div
    todoItems.appendChild(tasks);


    //create the the time variable
    const times = document.createElement('p')
    times.classList.add('time');
    times.innerText = time.value;
    todoItems.appendChild(times);


    // todo icons
    const todoIcon = document.createElement('div');
    todoIcon.classList.add('todoIcons');
    todoDiv.appendChild(todoIcon);


    //check mark button
    const completed = document.createElement('button');
    completed.innerHTML = '<i class="fas fa-check"></i>';
    completed.classList.add('completed-button');
    todoIcon.appendChild(completed);

    //delete mark button
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.classList.add('finished-button');
    todoIcon.appendChild(trash)

    // append the todo li to the ul
    todoList.appendChild(todoDiv);
    console.log(todoDiv)


    // clear todo input value
    subject.value = "";
    task.value = "";
    time.value = "";
}

function deleteCheck(e){
    console.log(e.target)
    const item = e.target;
    // DELETE
    if(item.classList[0] === "finished-button"){
        const todo = item.parentElement;
        const todomsg = todo.parentElement;
        //adding of the animation class
        todomsg.classList.add('fall');
        // deleting the todo after the animation is finished
        todomsg.addEventListener('transitionend',function(){
            todomsg.remove();
        })
    }
    if(item.classList[0] === "completed-button"){
        const todo = item.parentElement;
        const todomesssage = todo.parentElement;
        todomesssage.classList.add('completedClass')
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
            break;
            case 'completed':
                if(todo.classList.contains('completedClass')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case 'skipped':
                if(!todo.classList.contains('completedClass')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            
        }
    })
}

function opens(){
    container.style.display = 'flex';
    opener.style.display = 'none';
    document.querySelector('body').style.background = 'rgba(0,0,0,.5)'
}
function cancel(){
    container.style.display = 'none';
    opener.style.display = 'flex';
    document.querySelector('body').style.background = 'none'


}



//IMPLEMENTING LOCAL STORAGE
function saveLocalTodos(todo){

}
