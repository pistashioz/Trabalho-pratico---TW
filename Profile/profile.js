//Isso é pra aparecer um de cada vez


const tabBtn= document.querySelectorAll(".tab");
const tab= document.getElementsByClassName("tabShow");

console.log(tab);
    
    function tabs(panelIndex){
        console.log('enter');

        for (i=0; i<tab.length; i++) {
            tab[i].style.display='none';
        }
        /*tab.forEach(function(node){
            node.style.display="none";
            console.log(node);
        });*/
        tab[panelIndex].style.display="flex";

    }

//Menu burger
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});