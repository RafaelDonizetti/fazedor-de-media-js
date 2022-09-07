function fazerMedia() {
    let n1 = Number(document.getElementById('nota1').value)
    let n2 = Number(document.getElementById('nota2').value)
    let n3 = Number(document.getElementById('nota3').value)
    let n4 = Number(document.getElementById('nota4').value)
    let res = document.getElementById('res')
    let media = (n1 + n2 + n3 + n4) / 4

    if (media <= 4) {
        res.innerHTML = `Sua nota foi de ${media}, e você foi reprovado`
    } else {
        res.innerHTML = `Sua nota foi de ${media}, e você está APROVADO!!!`
    }
}