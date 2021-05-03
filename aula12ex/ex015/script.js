function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotobbh.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotojovemh.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'fotoadultah.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotovelhoh.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotobbm.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotojovemm.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'fotoadultam.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotovelhom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    } 
}