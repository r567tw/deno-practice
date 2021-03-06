import { Application } from 'https://deno.land/x/oak/mod.ts'

import todosRouter from './routes/todos.ts'

const app = new Application()

app.use(todosRouter.routes())
app.use(todosRouter.allowedMethods())


await app.listen({port: 8000})