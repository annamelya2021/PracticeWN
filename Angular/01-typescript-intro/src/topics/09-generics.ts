export function whatsMyType<T>(argument: T): T {
    return argument
    
}

let amIstring = whatsMyType<string>("Hola Mundo")
let amInumber = whatsMyType<number>(1984)
let amIarray = whatsMyType<number[]>([1,2,3,4,5])

console.log(amIstring.split(" "))
console.log(amInumber)
console.log(amIarray)