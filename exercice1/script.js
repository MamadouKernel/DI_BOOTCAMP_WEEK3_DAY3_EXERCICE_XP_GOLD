// creation des divs qui afficherons nos lettres alphabetique

    //selection du grand div qui contiendra nos lettres
    const divContainer = document.querySelector('.container')
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    for(let lette of alpha){
        const div = document.createElement('div')
        div.setAttribute('draggable','true')
        div.className ='alphabet'
        divContainer.appendChild(div)
        div.innerHTML = lette
    }










//code pour gerer le deplacement des div contenant les lettres alphabetiques

document.addEventListener('DOMContentLoaded', (event) => {
    // Fonction qui sera appelée lorsqu'un élément sera sélectionné avec la souris

   // pour être déplacé
    function handleDragStart(e) {
        // Rend l'élément transparent
        this.style.opacity = "0.4";
        // Enregistre l'élément qui a déclenché l'événement dans une variable globale
        // qui sera utilisée plus tard pour déterminer si l'élément a été déplacé ou non
        dragSrcEl = this;
        // Indique au navigateur que l'élément peut être déplacé en utilisant la souris
        e.dataTransfer.effectAllowed = "move";
        // Enregistre les données de l'élément qui a déclenché l'événement dans un objet
        // qui sera utilisé plus tard lorsque l'élément sera déposé
        e.dataTransfer.setData("text/html", this.innerHTML);
    }
    // Fonction qui sera appelée lorsque l'utilisateur relâchera l'élément
    // qu'il a sélectionné avec la souris

    function handleDragEnd(e) {
        // Remet la propriété opacity de l'élément à sa valeur par défaut (c'est-à-dire 1),
        // ce qui le rend à nouveau visible
        this.style.opacity = "1";
    }


    function handleDragOver(e) {
        // Empêche le navigateur de traiter l'événement de manière par défaut
        e.preventDefault();
        // Termine la fonction et empêche le navigateur de continuer à traiter l'événement
        return false;
    }

    function handleDragEnter(e) {
        // Ajoute la classe 'over' à l'élément qui a déclenché l'événement
        this.classList.add("over");
    }
    

    function handleDragLeave(e) {
        // Supprime la classe 'over' de l'élément qui a déclenché l'événement
        this.classList.remove("over");
    }

    function handleDrop(e) {
        // Empêche le navigateur de rediriger vers l'élément sur lequel l'élément
        // a été déposé
        e.stopPropagation();
        // Si l'élément n'a pas été déplacé sur lui-même, échange le contenu
        // de l'élément avec celui de l'élément sur lequel il a été déposé
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData("text/html");
        }
        // Termine la fonction et empêche le navigateur de continuer à traiter
        // l'événement
        return false;
    }
    
    // Crée une variable globale qui sera utilisée pour stocker l'élément
    // qui a déclenché l'événement
    let dragSrcEl;
    // Récupère tous les éléments de la page qui ont la classe 'alphabet'
    const sources = document.getElementsByClassName("alphabet");

    // Pour chaque élément de la page qui a la classe 'alphabet'
    for (const source of sources) {
        // Supprime la classe 'over' de cet élément
        source.classList.remove('over');
    }


    // Pour chaque élément de la page qui a la classe 'alphabet'
    for (const source of sources) {
        // Ajoute un gestionnaire d'événements pour l'événement 'dragstart'
        // qui appelle la fonction 'handleDragStart' lorsque l'événement est déclenché
        source.addEventListener("dragstart", handleDragStart);
        // Ajoute un gestionnaire d'événements pour l'événement 'dragover'
        // qui appelle la fonction 'handleDragOver' lorsque l'événement est déclenché
        source.addEventListener("dragover", handleDragOver);
        // Ajoute un gestionnaire d'événements pour l'événement 'dragenter'
        // qui appelle la fonction 'handleDragEnter' lorsque l'événement est déclenché
        source.addEventListener("dragenter", handleDragEnter);
        // Ajoute un gestionnaire d'événements pour l'événement 'dragleave'
        // qui appelle la fonction 'handleDragLeave' lorsque l'événement est déclenché
        source.addEventListener("dragleave", handleDragLeave);
        // Ajoute un gestionnaire d'événements pour l'événement 'dragend'
        // qui appelle la fonction 'handleDragEnd' lorsque l'événement est déclenché
        source.addEventListener("dragend", handleDragEnd);
        // Ajoute un gestionnaire d'événements pour l'événement 'drop'
        // qui appelle la fonction 'handleDrop' lorsque l'événement est déclenché
        source.addEventListener("drop", handleDrop);
    }

})
