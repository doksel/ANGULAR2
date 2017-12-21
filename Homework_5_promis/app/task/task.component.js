"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_1 = require('../shared/todo');
var todo_service_1 = require('../shared/todo.service');
var TaskComponent = (function () {
    function TaskComponent(todoService) {
        this.todoService = todoService;
        this.listTodos = [];
    }
    TaskComponent.prototype.toggle = function (todo) {
        this.todoService.toggleTodo(todo);
    };
    TaskComponent.prototype.delete = function (todo) {
        this.todoService.deleteTodo(todo);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_1.Todo)
    ], TaskComponent.prototype, "todo", void 0);
    TaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-item',
            templateUrl: 'task.component.html',
            styleUrls: ['task.component.css']
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map