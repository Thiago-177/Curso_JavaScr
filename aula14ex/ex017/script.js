function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {    
        window.alert('Por favor, presta atenção')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') // aqui estamos criando um elemento do tipo option dentro do campo select no html 
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // util para outras linguagens para saber qual item foi selecionado
            tab.appendChild(item) // aqui estamos pedindo para ele adicionar
            c++
        }
    }
}