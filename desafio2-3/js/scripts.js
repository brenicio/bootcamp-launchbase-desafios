const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

for(let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active');
    });
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active');
    if(modal.classList.contains('maximize')){
        modal.classList.remove('maximize');
    }
});

document.querySelector('.maximize-modal').addEventListener('click', function(){
    modal.classList.add('maximize');
});