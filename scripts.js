// Animation simple au chargement de la page

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// Gestion du formulaire commande

const form = document.querySelector("form");


if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();


    let nom = document.querySelector('input[placeholder="Nom du joueur"]').value;

    let uid = document.querySelector('input[placeholder="UID du joueur"]').value;

    let offre = document.querySelector("select").value;


    if(nom === "" || uid === "" || offre === "Choisir une offre"){

        alert("Veuillez remplir toutes les informations");

        return;

    }


    // Message WhatsApp

    let message = 
    `Nouvelle commande\n\n`+
    `Joueur : ${nom}\n`+
    `UID : ${uid}\n`+
    `Offre : ${offre}`;


    let numero = "TON_NUMERO_WHATSAPP";


    let url = 
    "https://wa.me/" + numero +
    "?text=" + encodeURIComponent(message);


    window.open(url, "_blank");


});


}
function genererID(){

let nombre = Math.floor(Math.random()*90000)+10000;

return "GZ" + nombre;

}


let idCommande = genererID();

localStorage.setItem("commandeID", idCommande);
━━━━━━━━━━━━━━━━
COMMANDE #GZ48291

Statut :
⏳ En attente

Temps estimé :
5 - 30 minutes

━━━━━━━━━━━━━━━━
window.location.href="confirmation.html";