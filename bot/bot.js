/*
Function control bot.
doc : http://expressjs.com/fr/starter/basic-routing.html
doc github: https://github.com/Makeblock-official/mbot_nodebots
*/

//ROUTAGE AVEC L'INSTANCE EXPRESS DU DERIVER DE HTTP.

let express = require('express'); //renvoie une object.
let myAppBot = express(); //Crée une app express. 

// ON CREE DES ROUTES ICI !

//Start
myAppBot.get("/bot/start", function (req, res) {
    res.send("Demarre");
})

//Stop
myAppBot.get("/bot/stop", function (req, res) {
    res.send("Stop");
})

//Left
myAppBot.get("/bot/left", function (req, res) {
    res.send("Tourne a gauche");
})

//Forward
myAppBot.get("/bot/forward", function (req, res) {
    res.send("Avance");
})

//Back
myAppBot.get("/bot/back", function (req, res) {
    res.send("Recule");
})

//Right
myAppBot.get("/bot/right", function (req, res) {
    res.send("Tourne a droite");
})

//Test
myAppBot.get("/bot/test", function (req, res) {
    res.send("Motor test");
})

//Autorise les droits de requete xhr entre 2 nom de domaine.
let express = require('express')
let cors = require('cors')
let app = express()

app.use(cors())

//ecoute le port 3000.
myAppBot.listen(3000, function() {
    console.log("Ecoute le port 3000");
});
