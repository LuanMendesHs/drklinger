// inicio efeito header HOME topo
function initEfeitoHeaderHome(){
    const header = document.getElementById("header-js");
    const carrossel = document.querySelector(".carrossel");
    const ul = document.querySelector('.lista_hamburguer');
    
    function menuTopo() {
        const alturaTopo = carrossel.getBoundingClientRect().top;
        if(alturaTopo < 60) {
            header.classList.add('ativo');
            ul.classList.add('ativo');
        } else {
            header.classList.remove('ativo');
            ul.classList.remove('ativo');
        }
    }
    
    window.addEventListener('scroll', menuTopo);
}

initEfeitoHeaderHome();
// fim efeito header topo

// inicio efeito header SERVIÇOS topo
function initEfeitoHeaderServicos(){
    const header = document.getElementById("header-js");
    const introducao = document.querySelector(".introducao");
    const ul = document.querySelector('.lista_hamburguer');
    
    function menuTopo() {
        const alturaTopo = introducao.getBoundingClientRect().top;
        if(alturaTopo < 60) {
            header.classList.add('ativo');
            ul.classList.add('ativo');
        } else {
            header.classList.remove('ativo');
            ul.classList.remove('ativo');
        }
    }
    
    window.addEventListener('scroll', menuTopo);
}

initEfeitoHeaderServicos();
// fim efeito header topo

// Inicio hamburguer

function initEfeitoHamburguer() {
    const icon = document.querySelector('.icon');
    const ul = document.querySelector('.lista_hamburguer');
    icon.addEventListener('click', () => {
        icon.classList.toggle('ativa');
        ul.classList.toggle('ativa');
    })
}
initEfeitoHamburguer();

// Fim hamburguer


// inicio section sobre
function initEfeitoScrollSobre(){
    const sobre = document.querySelector('.sobre');
    const windowMetade = window.innerHeight * 0.8;
    
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


// Inicio envio Whatsapp
const botao = document.querySelectorAll('.js-botao');
botao.forEach((item,index) => {
    const phone = "+5588996231686";
    const mensagemOla = "Olá, eu vim pelo site e gostaria de agendar uma consulta.";
    const message = encodeURIComponent(`${mensagemOla}`);
    item.addEventListener("click", () => {

        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    })
    
})

// Fim envio Whatsapp