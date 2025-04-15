const boutonModale = document.querySelectorAll(".bouton");

for(let i=0; i<boutonModale.length; i+=1){
    boutonModale[i].addEventListener("click",ouvrir)
}

function ouvrir(){
    const modale = document.querySelector(".modale")
    modale = document.createElement('p');
    // besoin d aide//
    console.log(modale);
}