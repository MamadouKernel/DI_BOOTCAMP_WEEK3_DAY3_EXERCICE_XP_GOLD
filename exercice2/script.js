
//creation de notre div avec l'id header
const divHeader = document.createElement('div')
divHeader.id='header'

//css du div avec l'id header
divHeader.style.textAlign='center'

//ajout du div contenant notre title dans le body
document.body.appendChild(divHeader)

    //creation de l'enfant du div qui un h1
    const title = document.createElement('h1')
    title.innerHTML = 'Animation avec un paragraphe'
    divHeader.appendChild(title)

//fin de creation de notre div avec son element

//creation du deuxieme div avec notre paragraphe
const divContainer = document.createElement('div')
divContainer.className='container'

//insertion de cette div dans notre body
document.body.appendChild(divContainer)

    // creation de notre paragraphe
    const paragra = document.createElement('p')
    paragra.setAttribute('draggable','true')
    paragra.id='box'
    paragra.innerHTML='Je suis un paragraphe et tu peux me faire deplacer'

    divContainer.appendChild(paragra)

    //AJOUT DU CSS dans le di container et le paragraphe
        //css du div avec la class container
            const divContainerCss = document.querySelector('.container')
            divContainerCss.style.overflow = 'hidden'
            divContainerCss.style.textAlign = 'center'
        //css du paragraphe avec id box
            const paragraBox = document.querySelector('#box')
            paragraBox.style.padding = '20px'
            paragraBox.style.fontSize = '20px'
            paragraBox.style.display = 'inline-block'
            paragraBox.style.backgroundColor = 'blue'
            paragraBox.style.color = 'white'
        //fin css
    //fin du css du div et du paragraphe
//fin de la creation de nos elements du body

/** notre code JavaScript */

// Fonction qui sera appelée lorsqu'un élément sera sélectionné avec la souris
function handleStart(e) {
    // Modifie la taille de la police de l'élément qui a déclenché l'événement
    // pour qu'elle soit 50 pixels
    e.target.style.fontSize = '50px';
}

// Fonction qui sera appelée lorsque l'utilisateur relâchera l'élément
// qu'il a sélectionné avec la souris
function handleEnd(e) {
    // Modifie la taille de la police de l'élément qui a déclenché l'événement
    // pour qu'elle soit 20 pixels
    e.target.style.fontSize = '20px';
    // Récupère les coordonnées de l'écran à l'endroit où l'événement a été déclenché
    let _x = e.clientX;
    let _y = e.clientY;
    // Déplace l'élément en utilisant les coordonnées récupérées
    e.target.style.left = _x + "px";
    e.target.style.top = _y + "px";
    // Indique au navigateur que l'élément doit être positionné de manière absolue
    // par rapport à l'écran
    e.target.style.position = "absolute";
}

// Récupère l'élément de la page qui a l'ID 'box'
let element = document.getElementById("box");

// Ajoute un gestionnaire d'événements pour l'événement 'dragstart'
// qui appelle la fonction 'handleStart' lorsque l'événement est déclenché
element.addEventListener("dragstart", handleStart);

// Ajoute un gestionnaire d'événements pour l'événement 'dragend'
// qui appelle la fonction 'handleEnd' lorsque l'événement est déclenché
element.addEventListener("dragend", handleEnd);


/**
 * @author:konate mamadou
 */

