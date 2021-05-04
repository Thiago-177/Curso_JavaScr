let num = [3,2,1]
num[3] = 6
num.push(7) // é o append
console.log(num)
console.log(num.length) // é o len do python
num.sort() // ordena os elementos
console.log(num)
let posi = num.indexOf(9) // aqui ele busca na sua lista o valor 7 e em que posição ele esta 


/*
for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}
*/
// jeito mais facil ainda!!

for (let pos in num) { // para cada posição eu vou mostrar.. igual python
    console.log(num[pos])

// buscando valores dentro de vetores 



if (posi == -1) { // usamos essa sintaxe para representar quando não encontrar o valor que queremos  
    console.log('O valor não foi encontrado ')
} else {
    
        console.log(`a variável ${num[posi]} está na ${posi} posição`)
    }
}