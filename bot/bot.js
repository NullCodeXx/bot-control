/*
Function control bot.
doc : http://expressjs.com/fr/starter/basic-routing.html
*/

//ROUTAGE AVEC L'INSTANCE EXPRESS DU DERIVER DE HTTP.

let express = require('express'); //renvoie une object.
let myAppBot = express(); //Crée une app express. 
//utilise l'object et sa function static qui permet
myAppBot.use(express.static('public'));
myAppBot.listen(3000, function() {
    console.log("Ecoute le port 3000");
});


//Avancer.

//Reculer.

//Tourner a gauche.

//Tourner a droite.

//Demarer.

//stop.