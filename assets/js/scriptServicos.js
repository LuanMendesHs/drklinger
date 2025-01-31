// inicio efeito header SERVIÇOS topo
function initEfeitoHeaderServicos(){
    const header = document.getElementById("header-js");
    const introducao = document.querySelector(".introducao");
    
    function menuTopo() {
        const alturaTopo = introducao.getBoundingClientRect().top;
        if(alturaTopo < 60) {
            header.classList.add('ativo');
        } else {
            header.classList.remove('ativo');
        }
    }
    
    window.addEventListener('scroll', menuTopo);
}

initEfeitoHeaderServicos();
// fim efeito header topo


// inicio section sobre
function initEfeitoScrollSobre(){
    const sobre = document.querySelector('.sobre');
    const windowMetade = window.innerHeight * 0.6;
    
    function sobreScrollEfect() {
        const sobreTopo = sobre.getBoundingClientRect().top - windowMetade;
        if(sobreTopo < 0) {
            sobre.classList.add('ativo');
        }
    }
    window.addEventListener('scroll', sobreScrollEfect);
}
initEfeitoScrollSobre();
// fim section sobre

// inicio accordion duvidas frequentes
const accordionList = document.querySelectorAll('.js-duvidas h4');

function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
})


// fim accordion duvidas frequentes