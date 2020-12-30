import { Router } from 'https://deno.land/x/oak/mod.ts'


const router = new Router()

interface Todo {
    id: string;
    text: string;
}

let todos:Todo[] = []

router.get('/todos', (ctx) => {
    ctx.response.body = { 
        todos: todos
    }
})

router.post('/todos', async (ctx) => {
    const data = await ctx.request.body().value
    const newTodo: Todo = { 
        id: new Date().toISOString(), 
        text: data.text 
    }
    todos.push(newTodo)
    ctx.response.status = 201
    ctx.response.body = {
        message: 'todo created',
        newTodo: newTodo
    }
})

router.put('/todos/:todoId',async (ctx)=>{
    const todoId = ctx.params.todoId
    const data = await ctx.request.body().value

    const todoIndex = todos.findIndex((todo)=>{
        return todo.id === todoId
    })
    todos[todoIndex] = {id: todos[todoIndex].id, text: data.text}
    ctx.response.body = {
        message: 'todo updated'
    }
})
router.delete('/todos/:todoId', (ctx) => {
    const todoId = ctx.params.todoId
    todos = todos.filter(todo => {
        return todo.id != todoId
    })
    ctx.response.body = {
        message: 'todo deleted'
    }
 })

export default router;
