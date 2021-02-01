import { Task } from "./task.js"

export class TaskList {
    tasks = [];

    constructor() {

    }

    //method and replaces code in html
    addTask(name) {
      //console.log("can/'t add task yet");
      let task = new Task(Date.now(), name);

      if (name === "") {
        alert("You did not enter any items") 
      }
      else {
      this.tasks.push(task);
      }

      console.log("Added: " + task.getInfo());
      console.log(this.tasks);

      this.listTasks();
    }

    removeTask(event) {
        console.log("Removing Task ID # " + event.target.dataset.id);
        //function removeTask(event) {
            this.tasks = this.tasks.filter(function(task) {

                //if (task == event.target.parentElement.previousSibling.innerText) {
                 if (task.id == event.target.parentElement.dataset.id) {
                    return false;
                }
                else {
                    return true;
                }
        });

//calling previous function
        this.listTasks();
    }

    clear() {
        this.tasks = [];
        this.listTasks();
        console.log("Cleared the list");
    }

//hook into ul
listTasks() {
   let taskList = document.getElementById('task-list');
   let removeHandler = this.removeTask.bind(this);
//empty out
		    taskList.innerHTML = '';

            this.tasks.forEach(function(task) {

            let newTask = document.createElement('li');
//CHECKBOX
            let taskDone = document.createElement('input');

            taskDone.type = 'checkbox';
            taskDone.addEventListener('change', function(event) {
                task.toggleStatus();

            	if (event.target.checked) {
                    event.target.nextSibling.classList.add('done'); //class done is where the strickthru is
            	}
                else{
                	event.target.nextSibling.classList.remove('done');
                }
            });
         
//trash

          let taskText = document.createElement('span');
		  taskText.classList.add('task-item');
		   if (task.status == true) {
			   taskText.classList.add('done'); //strickthru by default if its done
			   taskDone.checked = true; //force checkbox to be checked by default
           }
           
	//creating time stamp and calling new function below
          taskText.innerText = task.getInfo();

          let taskRemove = document.createElement('button');
		  taskRemove.dataset.id = task.id;
          taskRemove.innerText = 'Remove';
          taskRemove.classList.add('btn');
          taskRemove.innerHTML = '<i class="fas fa-trash"></i>';
           
          taskRemove.addEventListener('click', removeHandler);

          newTask.appendChild(taskDone);
          newTask.appendChild(taskText);
          newTask.appendChild(taskRemove);

          taskList.appendChild(newTask);
		  //console.log(taskRemove.addEventListener);

      });
     } 
   }