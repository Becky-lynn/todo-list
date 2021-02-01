import { TaskList } from "./tasklist.js"

/**
 * Our taskList instance is responsible for the dynamic data that a user will be creating (ie. putting things on their to-do list.)
 */
let taskList = new TaskList();

/** 
 * The code below is to listen to events and values coming from the static HTML file.
 */
document.getElementById("add-task").addEventListener('click', function() {
   let newTask = document.getElementById('new-task');
   taskList.addTask(newTask.value);
   newTask.value = '';
});

document.getElementById("clear-list").addEventListener('click', function() {
    taskList.clear();
});
    
