// let message: string;

// message = 'Hello World';

// console.log(message);
// //  deno run app.ts

const text = 'hello world';
const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile('hello.txt', data).then(() => {
    console.log('write file! ')
});

export {}
// //  deno run --allow-write app.ts
