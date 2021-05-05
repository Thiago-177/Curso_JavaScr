let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // ! significa q não estará na lista 
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    } 
    num.value = ''
    num.focus() // voltao cursor para a área de preenchimento
}


function calcular() {
    let len = valores.length
    let soma = 0
    for (let c = 1; c < len; c++) {
        if (soma == 0) {
            soma = Number(valores[soma]) + Number(valores[c])
        } else {
            soma = soma + Number(valores[c])
        }
    }
    let media = Number(soma)/Number(len)
    
    valores.sort()
    
    res.innerHTML = `Ao todo, temos ${len} números cadastrados<br><br>`
    res.innerHTML += `O maior valor informado foi ${valores[len-1]}<br><br>`
    res.innerHTML += `O menor valor informado foi ${valores[0]}<br><br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}<br><br>`
    res.innerHTML += `A média dos valores digitados é ${media}<br><br>`

}