import { Component } from '@angular/core';

interface Todo {
    task: string;
    completed: boolean;
}

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = 'todo';
  completed: boolean = true;
  newTask: string = '';
  task: string = '';
  filterText: string;

  toDos:Todo[] = [
    { completed: false, task:'Feed the baby'},
    { completed: false, task:'Wash the car'},
    { completed: false, task:'Get the gas'},
    { completed: false, task:'Go to the store'},
    { completed: false, task:'Walk the Dog'},
  ];

  filteredTodos: Todo[] = [...this.toDos];

   filter(todos: Todo, task) {
    this.filteredTodos = this.toDos.filter(
        item => item.task.toLowerCase().includes(this.filterText.toLowerCase()) 
    );
    
    if (!this.filterText) {
        this.filteredTodos = [...this.toDos];
    }
}

  addTask() {
    const newItem = {
      task: this.newTask,
      completed: false
    };

    this.toDos.push(newItem);
    this.filter(this.filterText);
    this.newTask = null;
    
  };

  removeTask(i){
    this.toDos.splice(i,1);
}

  completeTask(i){
    this.toDos[i].completed = true;
  }


}