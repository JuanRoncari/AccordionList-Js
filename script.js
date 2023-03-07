const dtExterno = document.querySelectorAll('.js-ativo dt');
const activedt = 'ativo';

dtExterno[0].classList.add(activedt);
dtExterno[0].nextElementSibling.classList.add(activedt);
function itemAtivo() {
    this.classList.toggle(activedt);
    this.nextElementSibling.classList.toggle(activedt);
};

dtExterno.forEach((item)=>{
    item.addEventListener('click',itemAtivo);
});
