const header = document.getElementById("header-js");
const carrosel = document.querySelector(".carrosel");

function menuTopo() {
    const alturaTopo = carrosel.getBoundingClientRect().top;
    if(alturaTopo < 60) {
        header.classList.add("ativo")
    } else {
        header.classList.remove("ativo")
    }
}

window.addEventListener('scroll', menuTopo)


// inicio section sobre
const sobre = document.querySelector('.sobre')
const windowMetade = window.innerHeight * 0.6;

function sobreScrollEfect() {
    const sobreTopo = sobre.getBoundingClientRect().top - windowMetade;
    if(sobreTopo < 0) {
        sobre.classList.add('ativo');
        console.log(sobre, sobreTopo)
    }
}
window.addEventListener('scroll', sobreScrollEfect)