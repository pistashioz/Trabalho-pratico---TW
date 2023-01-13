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