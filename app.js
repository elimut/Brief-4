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
            g.style.visibility = "hidden";
        }
        else{
            g.style.visibility = "visible";
        }
        if(p == 0){
            d.style.visibility = "hidden";
        }
        else{
            d.style.visibility = "visible";
        }
    }
    // afin de masquer les boutons ou non en fonction du nombre dimage et de la position qui sera complétée par la funtion anonyle lors du onclick
    g.onclick = function(){
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
    d.onclick = function(){
        if (p < 0) {
            p++;
            container.style.transform = "translate("+p*190 +"px)";
            container.style.transition = "all 0.5s ease";
            afficherMasquer();
        };
    }
}

// document.querySelectorAll("button").forEach(element => {
//     element.addEventListener("click", (event) => {
//         let popUp = document.createElement("div");
//         popUp.setAttribute("class", "pop");
//         popUp.style.border = "1px solid black";
//         popUp.style.padding = "10px"
//         popUp.style.width = "90%";
//         popUp.style.height = "500px";
//         popUp.style.paddingTop = "60px";
//         popUp.style.backgroundColor = "rgb(241, 241, 241)";
//         popUp.style.zIndex = "1";
//         popUp.style.position = "absolute";
//         popUp.style.top = `${10 + 25 * (event.target.id - 1)}%`;
//         popUp.style.borderRadius = "20px";
//         let text= document.createElement("p");
//         text.style.fontSize = "15px";
//         text.style.fontWeight = "bold";
//         text.innerText = `Adulatorum bellicosus sane accusatores iurgiis cui Constantium ruinarum subditivos inplorans quam sane occultis metu Nisibi.`;        document.querySelector(".card").appendChild(popUp);
//         document.querySelector(".pop").appendChild(text);
//         popUp.addEventListener("click", (event) => {
//             popUp.style.visibility = "hidden";
//         });
//     });
// });
let card = document.getElementsByClassName("card");
let key = "";

document.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", (event) => {
        let popUp = document.createElement("div");
        popUp.setAttribute("class", "pop");
        popUp.style.border = "1px solid black";
        popUp.style.padding = "10px"
        popUp.style.width = "90%";
        popUp.style.height = "300px";
        popUp.style.paddingTop = "60px";
        popUp.style.backgroundColor = "rgb(241, 241, 241)";
        popUp.style.zIndex = "1";
        popUp.style.position = "absolute";
        popUp.style.top = `${10 * (event.target.id - 1)}%`;
        popUp.style.borderRadius = "20px";
        let text= document.createElement("p");
        text.style.fontSize = "15px";
        text.style.fontWeight = "bold";
        let imagePop = document.createElement("img");
        for (const property in card) {
            console.log(`${property}`);
            key = (`${property}`)
            imagePop.src = "src[key]";
        }
        // card.forEach(())
        // imagePop.src = element.attr(src);
        text.innerText = `Adulatorum bellicosus sane accusatores iurgiis cui Constantium ruinarum subditivos inplorans quam sane occultis metu Nisibi.`;        
        document.querySelector(".card").appendChild(popUp);
        document.querySelector(".pop").appendChild(text);
        document.querySelector(".pop").appendChild(imagePop);
        popUp.addEventListener("click", (event) => {
            popUp.style.visibility = "hidden";
        });
    });
});

