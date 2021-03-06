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
var ListComponent = (function () {
    function ListComponent() {
        this.onToggled = new core_1.EventEmitter();
        this.onDeleted = new core_1.EventEmitter();
    }
    ListComponent.prototype.onToggle = function (todo) {
        this.onToggled.emit(todo);
    };
    ListComponent.prototype.onDelete = function (todo) {
        this.onDeleted.emit(todo);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ListComponent.prototype, "listTodos", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_1.Todo)
    ], ListComponent.prototype, "todo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "onToggled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "onDeleted", void 0);
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-list',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map