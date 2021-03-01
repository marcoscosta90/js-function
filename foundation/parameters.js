function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()

function defaultParams(a, b, c = 0) {
    console.log(a, b, c)
}
defaultParams(7, 8, 9)
defaultParams(7, 8)

console.log(1)


function logNums(...nums){
    for(let n of nums) {
        console.log(n)
    }
}

logNums([1, 2, 3])


function sumAll(...nums){
    let total = 0
    console.log
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1,2,3))
