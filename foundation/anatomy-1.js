//Function Declaration

function sayHello(){
    console.log('hello')
    }

    sayHello()

function sayHelloTo(name) {  
    console.log(`Hello ${name}`)
}

sayHelloTo('Mike')

function returnHi() {
    return 'Hi'
}

returnHi() 

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())


function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('John'))