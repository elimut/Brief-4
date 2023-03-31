/*Création menu burger responsive*/
window.addEventListener("DOMContentLoaded", (event) => {
    /* MENU */
    const LeMenu = document.querySelector("nav ul");
    LeMenu.setAttribute = ("id", "LeMenu");
    /*attribution id à la liste pour le mediaquiery*/
    const CmdMenu = document.createElement("div");
    /*création div qui sera le burger*/
    CmdMenu.setAttribute("id", "CmdMenu");
    CmdMenu.innerHTML = '<i class="fa-solid fa-bars fa-2x"></i>';
    /*Création icone burger*/
    document.body.append(CmdMenu);
    /*Ajout du menu sur la page*/
    CmdMenu.addEventListener('click',function(){
        LeMenu.style.display = (LeMenu.style.display == 'none')? '':'none';
        /*clic sur burger la liste apparait si non présente, sinon disparait*/
        CmdMenu.innerHTML = (CmdMenu.innerHTML == '<i class="fa-solid fa-xmark"></i>') ? '<i class="fa-solid fa-bars fa-2x"></i>' : '<i class="fa-solid fa-xmark"></i>'; 
        /*si menu burger ouvert avec icone croix, au clic met icone bar sinon croix*/
    });
    window.onload = function(){
      /*on teste la largeur de la fenêtre à chaque chargement*/
      var ww = window.innerWidth;
      LeMenu.style.display = ( ww > 900 )? '':'none';
      CmdMenu.style.display = ( ww > 900 )? 'none':'';
    };
    /* au redimensionnement de la fenêtre*/
    window.onresize = function(){
      /* on teste la largeur de la fenêtre à chaque changement de dimension,pour afficher ou non la liste ou le burger
      Ici, 900px la liste apparait et le burger disprait*/
      var ww = window.innerWidth;
      /*ww correspond à la dimension de la page */ 
      LeMenu.style.display = ( ww > 900 )? '':'none';
      CmdMenu.style.display = ( ww > 900 )? 'none':'';
    };

    /*Création carousel*/
    // au chargement de la page, initialisation et récupération des variables et boutons
    let nbr = 8;
    // déclaration varibale nbr qui est le nombre de card constituant le carousel
    let p = 0;
    // déclaration variable p, en position 0, qui ensuite sera décalée vers droite ou gauche
    var tailleImage = document.querySelector(".card img").offsetWidth;
    console.log(tailleImage)
    let container = document.querySelector("#container");
    // déclaration variable container qui contient les card, en HTML div id container, il servira de base pour faire défiler le carousel
    container.style.width = (`${tailleImage}` * nbr) + "px";
    // container.style.width = (190 * nbr) + "px";
    let carousel = document.querySelector("#carrousel");
    carousel.style.width = tailleImage + "px";
    // carousel.style.width = "190px";
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
            container.style.transform = "translate("+p*tailleImage+"px)";
            // container.style.transform = "translate("+p*190+"px)";
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
            container.style.transform = "translate("+p*tailleImage +"px)";
            // container.style.transform = "translate("+p*190 +"px)";
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
    // const croix = document.createElement("button");

    popUp.classList.add('modal');
    popUp.style.display = 'none';
    /*display none pour qu'elle ne s'affiche pas*/
    popUp.style.width = "("+10+tailleImage+"px)";
    popUp.appendChild(image);
    popUp.appendChild(parag);
    /*ajout de la l'image et paragraphe à la popup*/
    let offsetT = document.querySelector("header").offsetTop;
    console.log(offsetT)
    /*Positionnement de ma popUp en se basant sur les coordonnées du header, la position restera  fixe peu importe la size écran
    se positionne en fonction du plus proche parent
    La propriété en lecture seule HTMLElement.offsetTop renvoie la distance entre la bordure extérieure de l'élément courant et la bordure intérieure haute de l'élément offsetParent (le plus proche ancêtre positionné).*/
    popUp.style.top = `${offsetT}` + "px";
    let offsetL = document.querySelector("header").offsetLeft;
    popUp.style.left = `${offsetL}` + "px";
    document.body.appendChild(popUp);
    /*Ajout popup finale car lecture synchrone*/


    popUp.addEventListener('click', () => {
    popUp.style.display = 'none';
    });
    /*Evénement clic sur popup "disparaît"*/


    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const index = Array.from(buttons).indexOf(button);
        /*Récupération de l'index du bouton pour pouvoir afficher l'image adéquate. Console.log => tablea de 8 éléments*/
        image.src = `./img/img${index + 1}.jpg`;
        /*Application source de l' image popup avec index */
        parag.textContent = `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nostrum doloribus sit dolorum aliquam, est ab similique praesentium totam deserunt excepturi.   `;
        popUp.style.display = "flex";
        /*apparition popup au clic sur bouton*/ 
        });
    });
});


/*Création popUp à travailler =>
 voir map, boucle, bouncingelement et croix close
 problème : devoir recharger la page pour bien dimensionner le carousel avec offSetWidth?
voir fonctionnement du offsetTop
problème avec changement icone burger lors de la resize, revoir ternaire
 */

