/*
import {injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle')

function start() {

    const etapes = [
        { title: "Commence à faire le café", duree: 1000 },
        { title: "Mouds les grains de café", duree: 2000},
        { title: "Fait chauffer l'eau", duree: 3000 },
        { title: "Infuse les grains de café moulus", duree: 4000 },
        { title: "Verse le café dans une tasse", duree: 5000 },
        { title: "Ajoute un peu de lait dans la tasse", duree: 6000 },
        { title: "Le café est terminé.", duree: 7000 }
    ];

    const laListe = renewTag('ul');
    wrapper.append(laListe)

    injectElements(etapes, laListe)

}

document.querySelector('#start').addEventListener('click', start)


*/

import { injectElements, renewTag } from "./functions/dom.js";

const wrapper = document.querySelector("#controle");

function start() {
    const etapes = [
        { title: "Commence à faire le café", duree: 1000 },
        { title: "Mouds les grains de café", duree: 3000 },
        { title: "Fait chauffer l'eau", duree: 2000 },
        { title: "Infuse les grains de café moulus", duree: 4000 },
        { title: "Verse le café dans une tasse", duree: 1500 },
        { title: "Ajoute un peu de lait dans la tasse", duree: 2000 },
        { title: "Le café est terminé.", duree: 0 }
    ];

    const laListe = renewTag("ul");
    wrapper.append(laListe);

    injectElements(etapes, laListe);
}

// Créez un champ de saisie input
const inputQuantity = document.createElement("input");
inputQuantity.type = "number";
inputQuantity.placeholder = "Quantité de café en tasses";

// Créez un bouton "Calculer"
const calculateButton = document.createElement("button");
calculateButton.innerText = "Calculer";

// Ajoutez un gestionnaire d'événement au bouton "Calculer"
calculateButton.addEventListener("click", () => {
    // Récupérez la quantité spécifiée par l'utilisateur depuis le champ de saisie
    const quantity = parseInt(inputQuantity.value, 10);

    if (!isNaN(quantity) && quantity > 0) {
        // Calculez les quantités d'ingrédients nécessaires en fonction du nombre de tasses
        const waterQuantity = quantity * 200; // 200 ml d'eau par tasse
        const milkQuantity = quantity * 50;   // 50 ml de lait par tasse
        const coffeeQuantity = quantity * 30; // 15 g de grains de café par tasse

        // Affichez les quantités d'ingrédients requises à l'utilisateur
        alert(`Pour ${quantity} tasses de café, vous aurez besoin de :\n` +
            `- ${waterQuantity} ml d'eau\n` +
            `- ${milkQuantity} ml de lait\n` +
            `- ${coffeeQuantity} g de grains de café`);
    } else {
        // Gérez le cas où l'utilisateur n'a pas saisi une quantité valide
        alert("Veuillez entrer une quantité valide de café en tasses.");
    }
});

// Ajoutez le champ de saisie et le bouton à la page
wrapper.appendChild(inputQuantity);
wrapper.appendChild(calculateButton);

document.querySelector("#start").addEventListener("click", start);
