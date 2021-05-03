function contando() {
    var start1 = document.getElementById('txtstart')
    var end1 = document.getElementById('txtend')
    var passo1 = document.getElementById('txtpass')
    var res = document.getElementById('res')
    
    if (start1.value.length == 0 || end1.value.length == 0 || passo1.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let start = Number(start1.value)
        let end = Number(end1.value)
        let passo = Number(passo1.value)
        
        if (passo <=0) {
            window.alert('Passo inválido! Considerando Passo 1')
            passo = 1
        }

        if (start < end) {
            // Contagem crescente
            for (c = start; c <= end; c += passo) {
                res.innerHTML += ` > ${c} \u{1F919}`
            }
        } else {
            // Contagem regressiva
            for (let c = start; c >= end; c -= passo) {
                res.innerHTML += ` ${c} \u{1F919}`
            }    
        } 
        res.innerHTML += `\u{1F3C1}`
    }
}
    

