import { serve } from 'https://deno.land/std/http/server.ts'

const localhost = serve({ port: 8000 })

for await (const req of localhost) {
    req.respond({body: 'hello deno !'})   
}

//  deno run --allow-net server.ts