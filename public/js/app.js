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

    todoApp.createButton = document.querySelector('#create');
    todoApp.taskInput = document.querySelector('#task');
    todoApp.categoryInput = document.querySelector('#category');
    todoApp.dateInput = document.querySelector('#date');
    todoApp.list = document.querySelector('#list');



  },

  render: function(){
    console.log('Rendering!!! More Yayy!!');
    var listItemsFromTodos = this.todos
        .map(function(todo){
      return `<li>${todo.task}:(${todo.date})[${todo.category}]</li>`;
    })
        .join('');
    console.log(listItemsFromTodos);
    this.list.innerHTML = listItemsFromTodos;

  },
  addEventListeners: function(){
      this.createButton.addEventListener('click', this.addTodo);
  },

  addTodo: function (){
    var task = todoApp.taskInput.value;
    var date = todoApp.dateInput.value;
    var category = todoApp.categoryInput.value;
    var newTodo = createTodo(task, date, category);
    todoApp.todos.push(newTodo);


    todoApp.todos.push(newTodo);
    todoApp.taskInput.value = '';
    todoApp.dateInput.value = '';
    todoApp.categoryInput.value = '';

    todoApp.render();
    console.log(task);

  }

};

todoApp.init();
//console.log(todoApp);
