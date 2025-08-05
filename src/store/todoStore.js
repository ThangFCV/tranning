import { defineStore } from 'pinia'

let id = 0

export const useTodoStore = defineStore('todo', {
state: () => ({
    todos: [
        {id: id++, name: 'Tranning 1', action:'test test', type: 'done'},
        {id: id++, name: 'Tranning 2', action:'test test', type: 'none'},
        {id: id++, name: 'Tranning 3', action:'test test', type: 'done'},
    ],
}),
actions: {
    addTodo({ name, action, type }) {
    this.todos.push({
        id: id++,
        name,
        action,
        type,
    })
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    update({id , name, action, type}){
        const todo = this.todos.find(todo => todo.id === id) // tim id 
        if (todo) {
            if (name !== undefined) todo.name = name
            if (action !== undefined) todo.action = action
            if (type !== undefined) todo.type = type
        }
    }
}
})