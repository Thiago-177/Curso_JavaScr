function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora  >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#C8CBDC'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#599FB9'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#081D20'
    }
}
