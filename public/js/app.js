console.log('running!!!');


var todoApp = {
  todos: [], //our data source/store

  init: function(){
      this.cacheDom();
      this.addEventListeners();
      this.render();

  },
  cacheDom: function(){
    console.log('Caching the dom!!! Yayyy!!');

    this.createButton = document.querySelector('#create');
    this.taskInput = document.querySelector('#task');
    this.list = document.querySelector('#list');



  },

  render: function(){
    console.log('Rendering!!! More Yayy!!');
    var listItemsFromTodos = this.todos
        .map(function(todo){
      return '<li>'+ todo + '</li>';
    })
        .join('');
    console.log(listItemsFromTodos);
    this.list.innerHTML = listItemsFromTodos;

  },
  addEventListeners: function(){
      this.createButton.addEventListener('click', this.addTodo);
  },

  addTodo: function (){
    var taskValue = todoApp.taskInput.value;
    todoApp.todos.push(taskValue);
    todoApp.render();
    console.log(taskValue);

  }

};

todoApp.init();
//console.log(todoApp);
