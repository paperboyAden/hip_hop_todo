//factory function
function createTodo(task, date, category){
  var todo = {};
  todo.task = task;
  todo.date = date;
  todo.category = category;
  return todo;
}

var one = createTodo('get some bacon', '1/1/2017', 'groceries');
var two = createTodo('cry in the car', 'now', 'emotions');
console.log(one);
console.log(two);
