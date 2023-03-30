document.body.onload = function(){
    // au chargement de la page, initialisation et récupération des variables et boutons
    let nbr = 8;
    // déclaration varibale nbr qui est le nombre de card constituant le carousel
    let p = 0;
    // déclaration variable p, en position 0, qui ensuite sera décalée vers droite ou gauche
    let container = document.querySelector("#container");
    // déclaration variable container qui contient les card, en HTML div id container, il servira de base pour faire défiler le carousel
    container.style.width = (190 * nbr) + "px";
    let carousel = document.querySelector("#carrousel");
    carousel.style.width = "190px";
    // application d'une taille à la div carrousel afin qu'elle ait la taille de mon image afin qu'il puisse contenir toutes les card à faire défiler.Ici les card font 190px multiplié par le nombre card.
    let g = document.getElementById("g");
    let d = document.getElementById("d");
    // récupération des boutons droite et gauche afin de faire défiler les card

    function afficherMasquer(){
        if(p == -nbr + 1){
            d.style.visibility = "hidden";
        }
        else{
            d.style.visibility = "visible";
        }
        if(p == 0){
            g.style.visibility = "hidden";
        }
        else{
            g.style.visibility = "visible";
        }
    }
    // afin de masquer les boutons ou non en fonction du nombre dimage et de la position qui sera complétée par la funtion anonyle lors du onclick
    d.onclick = function(){
        if (p > -nbr + 1) {
            p--;
            container.style.transform = "translate("+p*190+"px)";
            container.style.transition = "all 0.5s ease";
            afficherMasquer();
        };
    }
    // clic bouton gauche déplacement vers la gauche :application d'une position négative -> p--, décrémentation afin d'afficher toutes les images mais pas plus
    // on applique une tranformation au container de la taille des images pour le défilement, ainsi seule une image défile lorsque l'on clique sur le bouton multiplié à la position
    // le if permet de cesser l'animation du carrousel une fois arrivé à la dernière image: p sera égal à -7, et dernière image, pas de défilement au delà 
    g.onclick = function(){
        if (p < 0) {
            p++;
            container.style.transform = "translate("+p*190 +"px)";
            container.style.transition = "all 0.5s ease";
            afficherMasquer();
        };
    }
    /*Création popUp*/
    const popUp = document.createElement('div');
    /*Création div pour popUp.*/
    const image = document.createElement('img');
    const parag = document.createElement('p');
    /* Création image de la popUp et du paragraphe*/ 
    const buttons = document.querySelectorAll('.card button');
    /*Récupération des boutons de card*/


    popUp.classList.add('modal');
    popUp.style.display = 'none';
    /*display none pour qu'elle ne s'affiche pas*/
    popUp.style.zIndex = "1";
    // popUp.style.position = "fixed";
    popUp.appendChild(image);
    popUp.appendChild(parag);
    /*ajout de la l'image et paragraphe à la popup*/
    document.body.appendChild(popUp);
    /*Ajout popup*/


    popUp.addEventListener('click', () => {
    popUp.style.display = 'none';
    });
    /*Evénement clic sur popup "disparaît"*/


    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const index = Array.from(buttons).indexOf(button);
        /*Récupération de l'index du bouton pour pouvoir afficher l'image adéquate. Console.log => tablea de 8 éléments*/
        image.src = `./img/img${index + 1}.jpg`;
        /*Application source de limage popup avec index */
        parag.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus sit dolorum aliquam, est ab similique praesentium totam deserunt excepturi.`;
        popUp.style.display = "flex";
        popUp.style.position = "fixed";
        /*apparition popup au clic sur bouton*/ 
        // let rect = popUp.getBoundingClientRect();
        // console.log(rect)
        // popUp.style.position = `${rect}`;
        popUp.style.top = "30%"
        });
    });
}
console.log(window.innerWidth);





/*Création popUp à travailler => voir map, boucle et bouncingelement*/

// let card = document.getElementsByClassName("card");
// let selector = container.querySelectorAll("button");
// selector.setAttribute = ("class", "selector");
// let popUp = document.createElement("div");
// popUp.setAttribute("class", "pop");
// popUp.style.border = "1px solid black";
// popUp.style.padding = "10px"
// popUp.style.width = "60%";
// popUp.style.height = "300px";
// popUp.style.paddingTop = "60px";
// popUp.style.backgroundColor = "rgb(241, 241, 241)";
// popUp.style.zIndex = "1";
// popUp.style.position = "absolute";
// popUp.style.top = `${10 * (event.target.id - 1)}%`;
// popUp.style.borderRadius = "20px";
// popUp.style.display = "none";
// let text= document.createElement("p");
// text.style.fontSize = "15px";
// text.style.fontWeight = "bold";
// let imagePop = document.createElement("img");
// document.querySelector(".card").appendChild(popUp);



// selector.forEach(element => {
//     element.addEventListener("click", (event) => {
//         document.querySelector(".pop").appendChild(text);
// document.querySelector(".pop").appendChild(imagePop);
//         popUp.style.display = "block";
//         popUp.style.top = `${10 * (event.target.id - 1)}%`;
//         for (let i = 0; i < card.length; i++){
//             var obj = card[i].img;
//             imagePop.src = "img/img"+obj+".jpg";
//             console.log(obj)
//         }
//     })
// });
// popUp.addEventListener("click", (event) => {
//     popUp.style.display = "none";
// });










