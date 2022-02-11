import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  MyTodos = [{
    title: "Make an Angular Project",
    ETA: "1 Day",
    owner: "Shubhayu Dasgupta",
    inprogress: false,
    isdragging: false,
    iscompleted: false,

  },
  {
    title: "Make an React Project",
    ETA: "1 Day",
    owner: "Shubham Dasgupta",
    inprogress: false,
    isdragging: false,
    iscompleted: false,

  },
  {
    title: "Make an Flutter Project",
    ETA: "1 Day",
    owner: "Shubham Dasgupta",
    inprogress: false,
    isdragging: false,
    iscompleted: true,

  },
  {
    title: "Make a CPP Project",
    ETA: "1 Day",
    owner: "Utsa Dasgupta",
    inprogress: false,
    isdragging: false,
    iscompleted: false,

  },
  {
    title: "Make a Python Project",
    ETA: "1 Day",
    owner: "Utsa Dasgupta",
    inprogress: true,
    isdragging: false,
    iscompleted: false,

  },
  {
    title: "Make a ML Project",
    ETA: "1 Day",
    owner: "Utsa Dasgupta",
    inprogress: true,
    isdragging: false,
    iscompleted: false,

  }];

  constructor() { }

  ngOnInit(): void {




  }

  dragStart(todoItem: any): void {
    this.MyTodos.forEach((eachTodo)=>{
      eachTodo.isdragging =false;
    });
    console.log('Dragging Starts')
    todoItem.isdragging = true;
    console.log(todoItem);
  }

  dragOver(myList: string) {

    if (myList ==='progress') {
      console.log('Came to inprogress')
      this.MyTodos.forEach((eachTodo: any) => {
        if (eachTodo.isdragging) {
          console.log(eachTodo)
          eachTodo.inprogress = true;
          eachTodo.iscompleted = false;
          
        }
      })
    }
    if (myList === 'completed') {
      this.MyTodos.forEach((eachTodo: any) => {
        if (eachTodo.isdragging) {
          eachTodo.inprogress = false;
          eachTodo.iscompleted = true;
         
        }
      })
    }
  }

  dragEnd(todoItem: any): void {
    console.log('Dragging ENDS')
    todoItem.isdragging = false;
    console.log(todoItem);
  }

}
