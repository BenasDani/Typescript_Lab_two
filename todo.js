"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("___________New Task Added____________");
        console.log("Task " + task + " inserted in the list");
        return this.tasks.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("START: All items in array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("END: All items in array");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task); //find where
        if (index > -1) { //if its in array
            this.tasks.splice(index, 1); //splice removes it
            console.log("_________Task Removed ____________");
            console.log("Task " + task + " removed from list.");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask('eat ');
myTodos.addTask('sleep ');
myTodos.listAllItems();
myTodos.deleteTask('sleep ');
