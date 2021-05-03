var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = segunda 
    2 = terça 
    3 = quarta
    4 = quinta
    5 = sexta 
    6 = sábado
*/

console.log(diaSem)

switch(diaSem) { // so funcona com inteiros ou strings 
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    default:
        console.log('Meio pro fim da semana')
}