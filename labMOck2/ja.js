function sac(){
    let fee = document.getElementById('7')
    let s = localStorage.setItem('gee',fee.value)
}

function lod(){
    let p = document.getElementById('05')
    let six = localStorage.getItem('gee')
    let ss = document.createElement('p')
    let stxt = document.createTextNode(six)
    ss.appendChild(stxt)
    p.appendChild(ss)
}