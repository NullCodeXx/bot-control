# bot-control
I control a bot mobil with server nodeJS and rooter express, the objective is to roll the bot when to click on the button.

INSTRUCTION : https://github.com/simplon-lyon/promo3-nodebot

DOCUMENTATION.

Installation

En supposant que Node.js est déjà installé, créez un répertoire pour héberger votre application et faites-en votre répertoire de travail.


$ mkdir myapp
$ cd myapp

Utilisez la commande npm init afin de créer un fichier package.json pour votre application. Pour plus d’informations sur le fonctionnement du fichier package.json, voir Specifics of npm’s package.json handling.


$ npm init

Cette commande vous invite à fournir un certain nombre d’informations, telles que le nom et la version de votre application. Pour le moment, vous pouvez simplement appuyer sur la touche RETURN pour accepter les valeurs par défaut, à l’exception de ce qui suit :


entry point: (index.js)

Entrez app.js ou un nom de votre choix pour le fichier principal. Si vous souhaitez que le nom soit index.js, appuyez sur la touche RETURN pour accepter le nom de fichier par défaut suggéré.

Installez ensuite Express dans le répertoire app, puis sauvegardez-le dans la liste des dépendances. Par exemple :


$ npm install express --save

Pour installer Express de façon temporaire et ne pas l’ajouter à la liste des dépendances, omettez l’option --save :


$ npm install express

Les modules de noeuds installés à l’aide de l’option --save sont ajoutés à la liste dependencies dans le fichier package.json. Par la suite, l’exécution de npm install dans le répertoire app installera automatiquement les modules dans la liste des dépendances.


____________________________________________________________________________________________________________________


Exemple Hello world

Il s’agit de l’application Express la plus simple que vous puissiez créer. Cette application ne contient qu’un seul fichier, c’est-à-dire tout l’inverse de ce que vous obtiendriez avec le générateur Express, qui crée l’échafaudage d’une application entière, avec des fichiers JavaScript, des modèles Jade et des sous-répertoires pour divers motifs.
Premièrement, créez un répertoire appelé myapp, rendez-vous dedans et exécutez la commande npm init. Ensuite, installez express en tant que dépendance en suivant les instructions du guide d’installation.

Dans le répertoire myapp, créez un fichier appelé app.js et ajoutez le code suivant :


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

L’application démarre un serveur et écoute le port 3000 à la recherche de connexions. L’application répond “Hello World!” aux demandes adressées à l’URL racine (/) ou à la route racine. Pour tous les autres chemins d’accès, elle répondra par 404 Not Found.

Les objets req (demande) et res (réponse) sont exactement les mêmes que ceux que le Noeud fournit, vous pouvez donc appeler req.pipe(), req.on('data', callback) et tout autre objet sans recourir à Express.
Exécutez l’application avec la commande suivante :


$ node app.js


____________________________________________________________________________________________________________________


Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)
Where:

app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
This tutorial assumes that an instance of express named app is created and the server is running. If you are not familiar with creating an app and starting it, see the Hello world example.
The following examples illustrate defining simple routes.

Respond with Hello World! on the homepage:

app.get('/', function (req, res) {
  res.send('Hello World!')
})
Respond to POST request on the root route (/), the application’s home page:

app.post('/', function (req, res) {
  res.send('Got a POST request')
})
Respond to a PUT request to the /user route:

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
Respond to a DELETE request to the /user route:

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
For more details about routing, see the routing guide.


____________________________________________________________________________________________________________________


Servir des fichiers statiques dans Express

Pour servir des fichiers statiques tels que les images, les fichiers CSS et les fichiers JavaScript, utilisez la fonction de logiciel intermédiaire intégré express.static dans Express.

Passez le nom du répertoire qui contient les actifs statiques dans la fonction de logiciel intermédiaire express.static afin de commencer à servir les fichiers directement. Par exemple, utilisez le code suivant pour servir des images, des fichiers CSS et des fichiers JavaScript dans un répertoire nommé public :


app.use(express.static('public'));

Maintenant, vous pouvez charger les fichiers qui sont dans le répertoire public :


http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html

Express recherche les fichiers relatifs au répertoire statique, donc le nom du répertoire statique ne fait pas partie de l'URL.
Pour utiliser plusieurs répertoires statiques actifs, utilisez la fonction middleware express.static plusieurs fois :


app.use(express.static('public'));
app.use(express.static('files'));

Express recherche les fichiers dans l’ordre dans lequel vous avez établi les répertoires statiques avec la fonction middleware express.static.

Pour créer un préfixe de chemin d’accès virtuel (dans lequel le chemin d’accès n’existe pas vraiment dans le système de fichiers) pour les fichiers qui sont servis par la fonction express.static, indiquez un chemin de montage pour le répertoire statique, comme démontré ci-dessous :


app.use('/static', express.static('public'));

Maintenant, vous pouvez charger les fichiers qui sont dans le répertoire public à partir du préfixe de chemin d’accès /static.


http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html

Cependant, le chemin d’accès que vous fournissez à la fonction express.static est en rapport avec le répertoire à partir duquel vous lancez votre processus noeud. Si vous exécutez l’application express à partir d’un autre répertoire, il est plus sûr d’utiliser le chemin d’accès absolu que vous voulez servir :


app.use('/static', express.static(__dirname + '/public'));


____________________________________________________________________________________________________________________


FAQ

How should I structure my application?
There is no definitive answer to this question. The answer depends on the scale of your application and the team that is involved. To be as flexible as possible, Express makes no assumptions in terms of structure.

Routes and other application-specific logic can live in as many files as you wish, in any directory structure you prefer. View the following examples for inspiration:

Route listings
Route map
MVC style controllers
Also, there are third-party extensions for Express, which simplify some of these patterns:

Resourceful routing
How do I define models?
Express has no notion of a database. This concept is left up to third-party Node modules, allowing you to interface with nearly any database.

See LoopBack for an Express-based framework that is centered around models.

How can I authenticate users?
Authentication is another opinionated area that Express does not venture into. You may use any authentication scheme you wish. For a simple username / password scheme, see this example.

Which template engines does Express support?
Express supports any template engine that conforms with the (path, locals, callback) signature. To normalize template engine interfaces and caching, see the consolidate.js project for support. Unlisted template engines might still support the Express signature.

For more information, see Using template engines with Express.

How do I handle 404 responses?
In Express, 404 responses are not the result of an error, so the error-handler middleware will not capture them. This behavior is because a 404 response simply indicates the absence of additional work to do; in other words, Express has executed all middleware functions and routes, and found that none of them responded. All you need to do is add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
How do I setup an error handler?
You define error-handling middleware in the same way as other middleware, except with four arguments instead of three; specifically with the signature (err, req, res, next):

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
For more information, see Error handling.

How do I render plain HTML?
You don’t! There’s no need to “render” HTML with the res.render() function. If you have a specific file, use the res.sendFile() function. If you are serving many assets from a directory, use the express.static() middleware function.

____________________________________________________________________________________________________________________


Utiliser le middleware pour exploiter les fichiers statiques
En développement, vous pouvez utiliser res.sendFile() pour exploiter les fichiers statiques. Ne l’utilisez toutefois pas en production, car cette fonction doit lire le système de fichiers pour chaque demande de fichier ; elle se heurterait à des temps d’attente importants qui affecteraient les performances globales de l’application. Notez que res.sendFile() n’est pas implémentée avec l’appel système sendfile, qui la rendrait beaucoup plus efficace.

Utilisez plutôt le middleware serve-static (ou tout middleware équivalent), qui est optimisé pour l’utilisation des fichiers dans les applications Express.

Encore mieux, utilisez un proxy inverse pour exploiter les fichiers statiques ; pour plus d’informations, voir Utiliser un proxy inverse.

Procéder à une journalisation correcte
En règle générale, vous utilisez la journalisation à partir de votre application à deux fins : le débogage et la journalisation de l’activité de votre application (principalement tout le reste). L’utilisation de console.log() ou de console.err() pour imprimer des messages de journal sur le terminal est une pratique courante en développement. Cependant, ces fonctions sont synchrones lorsque la destination est un terminal ou un fichier ; elles ne conviennent donc pas en production, à moins que vous ne dirigiez la sortie vers un autre programme.

Pour le débogage

Si vous utilisez la journalisation à des fins de débogage, utilisez un module de débogage spécial tel que debug plutôt que d’utiliser console.log(). Ce module vous permet d’utiliser la variable d’environnement DEBUG pour contrôler les messages de débogage envoyés à console.err(), le cas échéant. Pour que votre application reste exclusivement asynchrone, vous devrez toujours diriger console.err() vers un autre programme. Mais bon, vous n’allez pas vraiment procéder à un débogage en production, n’est-ce pas ?

Pour journaliser l’activité de votre application

Si vous journalisez l’activité de votre application (par exemple, pour suivre le trafic ou les appels API), utilisez une bibliothèque de journalisation telle que Winston ou Bunyan plutôt que d’utiliser console.log(). Pour obtenir une comparaison détaillée de ces deux bibliothèques, consultez l’article StrongLoop intitulé Comparing Winston and Bunyan Node.js Logging.


Traiter correctement les exceptions
Les applications Node plantent lorsqu’elles tombent sur une exception non interceptée. Si vous ne traitez pas les exceptions et ne prenez pas les décisions appropriées, votre application Express plantera et sera déconnectée. Si vous suivez les conseils de la rubrique ci-dessous intitulée Vérifier que votre application redémarre automatiquement, votre application pourra être restaurée suite à un plantage. Le délai de démarrage des applications Express est heureusement court en règle générale. Vous souhaitez toutefois éviter tout plantage en priorité et pour ce faire, vous devez traiter les exceptions correctement.

Pour vérifier que vous traitez toutes les exceptions, procédez comme suit :

Utiliser try-catch
Utiliser des promesses
Avant de s’immerger dans les rubriques qui suivent, il est conseillé de posséder des connaissances de base concernant le traitement des erreurs Node/Express, à savoir l’utilisation des rappels “error-first” et la propagation des erreurs dans le middleware. Node utilise la convention de “rappel error-first” pour renvoyer les erreurs issues des fonctions asynchrones, dans laquelle le premier paramètre de la fonction callback est l’objet error, suivi par les données de résultat dans les paramètres suivants. Pour n’indiquer aucune erreur, indiquez null comme premier paramètre. La fonction de rappel doit suivre la convention de rappel “error-first” de sorte à traiter l’erreur de manière significative. Dans Express, la meilleure pratique consiste à utiliser la fonction next() pour propager les erreurs via la chaîne du middleware.

Pour plus d’informations sur les bases du traitement des erreurs, voir :

Error Handling in Node.js
Building Robust Node Applications: Error Handling (blogue StrongLoop)
A ne pas faire

Vous ne devriez pas écouter l’événement uncaughtException, émis lorsqu’une exception remonte vers la boucle d’événements. L’ajout d’un programme d’écoute d’événement pour uncaughtException va modifier le comportement par défaut du processus qui rencontre une exception ; le processus va continuer à s’exécuter malgré l’exception. Cela pourrait être un bon moyen d’empêcher votre application de planter, mais continuer à exécuter l’application après une exception non interceptée est une pratique dangereuse qui n’est pas recommandée, étant donné que l’état du processus devient peu fiable et imprévisible.

De plus, l’utilisation d’uncaughtException est officiellement reconnue comme étant rudimentaire et il a été proposé de le supprimer. Ecouter uncaughtException n’est qu’une mauvaise idée. Voilà pourquoi nous recommandons d’utiliser plusieurs processus et superviseurs à la place : faire planter son application et la redémarrer est souvent plus sûr que de la restaurer après une erreur.

L’utilisation de domain n’est également pas recommandée. Ce module obsolète ne résout globalement pas le problème.


Utiliser try-catch

Try-catch est un élément de langage JavaScript que vous pouvez utiliser pour intercepter les exceptions dans le code synchrone. Utilisez try-catch pour traiter les erreurs d’analyse JSON, comme indiqué ci-dessous, par exemple.

Utilisez un outil tel que JSHint ou JSLint pour vous aider à identifier les exceptions implicites comme les erreurs de référence dans les variables non définies.

Voici un exemple d’utilisation de try-catch pour traiter une exception potentielle de plantage de processus. Cette fonction middleware accepte un paramètre de zone de requête nommé “params” qui est un objet JSON.


app.get('/search', function (req, res) {
  // Simulating async operation
  setImmediate(function () {
    var jsonStr = req.query.params;
    try {
      var jsonObj = JSON.parse(jsonStr);
      res.send('Success');
    } catch (e) {
      res.status(400).send('Invalid JSON string');
    }
  });
});

Toutefois, try-catch ne fonctionne que dans le code synchrone. Etant donné que la plateforme Node est principalement asynchrone (en particulier dans un environnement de production), try-catch n’interceptera pas beaucoup d’exceptions.


Utiliser des promesses

Les promesses vont traiter n’importe quelle exception (explicite et implicite) dans les blocs de code asynchrone qui utilisent then(). Contentez-vous d’ajouter .catch(next) à la fin des chaînes de promesse. Par exemple :


app.get('/', function (req, res, next) {
  // do some sync stuff
  queryDb()
    .then(function (data) {
      // handle data
      return makeCsv(data)
    })
    .then(function (csv) {
      // handle csv
    })
    .catch(next);
});

app.use(function (err, req, res, next) {
  // handle error
});

Toutes les erreurs asynchrones et synchrones sont à présent propagées vers le middleware de traitement des erreurs.

Observez toutefois les deux avertissements suivants :

L’intégralité de votre code asynchrone doit renvoyer des promesses (à l’exception des émetteurs). Si une bibliothèque spécifique ne renvoie pas de promesses, convertissez l’objet de base à l’aide d’une fonction d’aide telle que Bluebird.promisifyAll().
Les émetteurs d’événements (comme les flux) peuvent toujours générer des exceptions non interceptées. Veillez donc à traiter l’événement d’erreur de manière appropriée ; par exemple :

app.get('/', wrap(async (req, res, next) => {
  let company = await getCompanyById(req.query.id)
  let stream = getLogoStreamById(company.id)
  stream.on('error', next).pipe(res)
}))

Pour plus d’informations sur le traitement des erreurs à l’aide de promesses, voir :

Asynchronous Error Handling in Express with Promises, Generators and ES7
Promises in Node.js with Q – An Alternative to Callbacks

A faire dans votre environnement/configuration
Les actions suivantes peuvent être réalisées dans votre environnement système afin d’améliorer les performances de votre application :

Définir NODE_ENV sur “production”
Vérifier que votre application redémarre automatiquement
Exécuter votre application dans un cluster
Mettre en cache les résultats d’une demande
Utiliser un équilibreur de charge
Utiliser un proxy inverse
Définir NODE_ENV sur “production”
La variable d’environnement NODE_ENV spécifie l’environnement dans lequel une application s’exécute (en règle générale, développement ou production). Le moyen le plus simple d’améliorer vos performances consiste à définir NODE_ENV sur “production.”

En définissant NODE_ENV sur “production”, Express :

Met en cache les modèles d’affichage.
Met en cache les fichiers CSS générés à partir d’extensions CSS.
Génère moins de messages d’erreur prolixes.
Les tests indiquent que ce simple paramétrage peut multiplier les performances d’application par trois !

Si vous avez besoin d’écrire du code spécifique à un environnement, vous pouvez vérifier la valeur de NODE_ENV avec process.env.NODE_ENV. Sachez que la vérification de la valeur de n’importe quelle variable d’environnement pénalise les performances et devrait donc être effectuée avec modération.

En développement, vous définissez généralement les variables d’environnement dans votre shell interactif, à l’aide de export ou de votre fichier .bash_profile par exemple. Il n’est toutefois pas conseillé de le faire sur un serveur de production ; utilisez plutôt le système init de votre système d’exploitation (systemd ou Upstart). La section qui suit fournit des détails sur l’utilisation de votre système init en général, mais la définition de NODE_ENV est tellement importante pour les performances (et facile à réaliser), qu’elle est mise en évidence ici.

Avec Upstart, utilisez le mot clé env dans votre fichier de travail. Par exemple :


# /etc/init/env.conf
 env NODE_ENV=production

Pour plus d’informations, voir Upstart Intro, Cookbook and Best Practices.

Avec systemd, utilisez la directive Environment dans votre fichier d’unité. Par exemple :


# /etc/systemd/system/myservice.service
Environment=NODE_ENV=production

Pour plus d’informations, voir Using Environment Variables In systemd Units.

Si vous utilisez StrongLoop Process Manager, vous pouvez également définir la variable d’environnement lorsque vous installez StrongLoop PM en tant que service.

Vérifier que votre application redémarre automatiquement
En production, vous ne souhaitez jamais que votre application soit déconnectée. Vous devez donc veiller à ce qu’elle redémarre si elle plante et si le serveur plante. Même si vous espérez que cela n’arrive pas, vous devez en réalité considérer ces deux éventualités en :

Utilisant un gestionnaire de processus pour redémarrer l’application (et Node) lorsqu’elle plante.
Utilisant le système init fourni par votre système d’exploitation pour redémarrer le gestionnaire de processus lorsque le système d’exploitation plante. Vous pouvez également utiliser le système init sans gestionnaire de processus.
Les applications Node plantent si elles tombent sur une exception non interceptée. Avant toute chose, vérifiez que votre application est correctement testée et qu’elle traite toutes les exceptions (voir Traiter correctement les exceptions pour plus de détails). En cas d’échec, mettez en place un mécanisme qui garantit que si et lorsque votre application plante, elle redémarre automatiquement.

Utiliser un gestionnaire de processus

En développement, vous avez simplement démarré votre application à partir de la ligne de commande avec node server.js ou une instruction similaire. En production, cela vous mènera droit au désastre. Si l’application plante, elle sera déconnectée tant que vous ne la redémarrerez pas. Pour garantir que votre application redémarre si elle plante, utilisez un gestionnaire de processus. Un gestionnaire de processus est un “conteneur” d’applications qui facilite le déploiement, offre une haute disponibilité et vous permet de gérer l’application lors de son exécution.

En plus de redémarrer votre application lorsqu’elle plante, un gestionnaire de processus peut vous permettre :

De vous informer sur les performances d’exécution et la consommation des ressources.
De modifier les paramètres de manière dynamique afin d’améliorer les performances.
De contrôler la mise en cluster (StrongLoop PM et pm2).
Les gestionnaires de processus les plus populaires pour Node sont les suivants :

StrongLoop Process Manager
PM2
Forever
Pour obtenir une comparaison détaillée de ces trois gestionnaires de processus, voir http://strong-pm.io/compare/. Pour obtenir une présentation détaillée, voir Gestionnaires de processus pour les applications Express.

L’utilisation de l’un de ces trois gestionnaires de processus suffira à garder votre application active, même si elle plantera de temps en temps.

StrongLoop PM possède un grand nombre de fonctionnalités qui ciblent en particulier le déploiement en production. Vous pouvez l’utiliser avec les outils StrongLoop associés pour :

Générer et mettre en package votre application en local, puis la déployer en toute sécurité sur votre système de production.
Redémarrer automatiquement votre application si elle plante pour une raison quelconque.
Gérer vos clusters à distance.
Afficher les profils d’UC et les instantanés de segment de mémoire pour optimiser les performances et diagnostiquer les fuites de mémoire.
Afficher les mesures de performance de votre application.
Evoluer facilement vers plusieurs hôtes avec un contrôlé intégré de l’équilibreur de charge Nginx.
Comme décrit ci-dessous, lorsque vous installez StrongLoop PM en tant que service de système d’exploitation à l’aide de votre système init, il redémarre automatiquement au redémarrage du système. Ainsi, vos processus applicatifs et vos clusters resteront toujours actifs.

Utiliser un système init

Le niveau de fiabilité suivant consiste à garantir que votre application redémarre lorsque le serveur redémarre. Les systèmes peuvent toujours tomber en panne pour divers motifs. Pour garantir que votre application redémarre si le serveur plante, utilisez le système init intégré à votre système d’exploitation. Les deux principaux systèmes init actuellement utilisés sont systemd et Upstart.

Vous pouvez utiliser les systèmes init de deux manières dans votre application Express :

Exécutez votre application dans un gestionnaire de processus, puis installez le gestionnaire de processus en tant que service avec le système init. Le gestionnaire de processus va redémarrer votre application lorsqu’elle plantera et le système init va redémarrer le gestionnaire de processus lorsque le système d’exploitation redémarrera. Il s’agit de la méthode recommandée.
Exécutez votre application (et Node) directement avec le système init. Cette méthode est plus simple, mais vous ne profitez pas des avantages d’un gestionnaire de processus.
Systemd

Systemd est un système Linux et un gestionnaire de services. La plupart des distributions Linux principales ont adopté systemd comme leur système init par défaut.

Un fichier de configuration de service systemd est appelé fichier d’unité et porte l’extension .service. Voici un exemple de fichier d’unité permettant de gérer une application Node directement (remplacez le texte en gras par les valeurs appropriées à votre système et votre application) :


[Unit]
Description=Awesome Express App

[Service]
Type=simple
ExecStart=/usr/local/bin/node /projects/myapp/index.js
WorkingDirectory=/projects/myapp

User=nobody
Group=nogroup

# Environment variables:
Environment=NODE_ENV=production

# Allow many incoming connections
LimitNOFILE=infinity

# Allow core dumps for debugging
LimitCORE=infinity

StandardInput=null
StandardOutput=syslog
StandardError=syslog
Restart=always

[Install]
WantedBy=multi-user.target

Pour plus d’informations sur systemd, voir la page d’aide de systemd.

StrongLoop PM en tant que service systemd

Vous pouvez facilement installer StrongLoop Process Manager en tant que service systemd. Une fois que c’est fait, lorsque le serveur redémarre, il redémarre automatiquement StrongLoop PM, qui redémarre ensuite toutes les applications qu’il gère.

Pour installer StrongLoop PM en tant que service systemd :


$ sudo sl-pm-install --systemd

Démarrez ensuite le service comme suit :


$ sudo /usr/bin/systemctl start strong-pm

Pour plus d’informations, voir Setting up a production host dans la documentation StrongLoop.

Upstart

Upstart est un outil système disponible sur un grand nombre de distributions Linux et qui permet de démarrer des tâches et des services pendant le démarrage du système, de les arrêter pendant l’arrêt du système et de les superviser. Vous pouvez configurer votre application Express ou votre gestionnaire de processus en tant que service, puis Upstart le redémarrera automatiquement lorsqu’il plantera.

Un service Upstart est défini dans un fichier de configuration de travail (également appelé “travail”) portant l’extension .conf. L’exemple qui suit décrit comment créer un travail appelé “myapp” pour une application nommée “myapp” avec le fichier principal situé dans /projects/myapp/index.js.

Créez un fichier nommé myapp.conf dans /etc/init/ avec le contenu suivant (remplacez le texte en gras par les valeurs appropriées à votre système et votre application) :


# When to start the process
start on runlevel [2345]

# When to stop the process
stop on runlevel [016]

# Increase file descriptor limit to be able to handle more requests
limit nofile 50000 50000

# Use production mode
env NODE_ENV=production

# Run as www-data
setuid www-data
setgid www-data

# Run from inside the app dir
chdir /projects/myapp

# The process to start
exec /usr/local/bin/node /projects/myapp/index.js

# Restart the process if it is down
respawn

# Limit restart attempt to 10 times within 10 seconds
respawn limit 10 10

REMARQUE : ce script nécessite Upstart 1.4 ou ultérieur, pris en charge sur Ubuntu 12.04-14.10.

Etant donné que le travail est configuré pour s’exécuter au démarrage du système, votre application sera démarrée avec le système d’exploitation et sera redémarrée automatiquement si l’application plante ou si le système tombe en panne.

En plus de redémarrer automatiquement l’application, Upstart vous permet d’utiliser les commandes suivantes :

start myapp – Démarre l’application
restart myapp – Redémarre l’application
stop myapp – Arrête l’application
Pour plus d’informations sur Upstart, voir Upstart Intro, Cookbook and Best Practises.

StrongLoop PM en tant que service Upstart

Vous pouvez facilement installer StrongLoop Process Manager en tant que service Upstart. Une fois que c’est fait, lorsque le serveur redémarre, il redémarre automatiquement StrongLoop PM, qui redémarre ensuite toutes les applications qu’il gère.

Pour installer StrongLoop PM en tant que service Upstart 1.4 :


$ sudo sl-pm-install

Exécutez ensuite le service comme suit :


$ sudo /sbin/initctl start strong-pm

REMARQUE : sur les systèmes qui ne prennent pas en charge Upstart 1.4, les commandes sont légèrement différentes. Pour plus d’informations, voir Setting up a production host dans la documentation StrongLoop.

Exécuter votre application dans un cluster
Dans un système multicoeur, vous pouvez augmenter les performances d’une application Node en lançant un cluster de processus. Un cluster exécute plusieurs instances de l’application, idéalement une instance sur chaque coeur d’UC, répartissant ainsi la charge et les tâches entre les instances.

IMPORTANT : étant donné que les instances d’application s’exécutent en tant que processus distincts, elles ne partagent pas le même espace mémoire. Autrement dit, les objets sont en local sur chaque instance de l’application. Par conséquent, vous ne pouvez pas conserver l’état dans le code de l’application. Vous pouvez toutefois utiliser un magasin de données en mémoire tel que Redis pour stocker les données de session et l’état. Cette fonctionnalité s’applique essentiellement à toutes les formes de mise à l’échelle horizontale, que la mise en cluster soit effectuée avec plusieurs processus ou avec plusieurs serveurs physiques.

Dans les applications mises en cluster, les processus de traitement peuvent planter individuellement sans impacter le reste des processus. Outre les avantages en termes de performance, l’isolement des pannes constitue une autre raison d’exécuter un cluster de processus d’application. Chaque fois qu’un processus de traitement plante, veillez toujours à consigner l’événement et à génération un nouveau processus à l’aide de cluster.fork().

Utilisation du module cluster de Node

La mise en cluster peut être réalisée avec le module cluster de Node. Ce module permet à un processus maître de générer des processus de traitement et de répartir les connexions entrantes parmi ces processus. Toutefois, plutôt que d’utiliser ce module directement, utilisez l’un des nombreux outils qui le font pour vous, à savoir node-pm ou cluster-service par exemple.

Utilisation de StrongLoop PM

Si vous déployez votre application dans StrongLoop Process Manager (PM), vous pouvez alors utiliser la mise en cluster sans modifier votre code d’application.

Lorsque StrongLoop Process Manager (PM) exécute une application, il l’exécute automatiquement dans un cluster avec un nombre de processus de traitement égal au nombre de coeurs d’UC sur le système. Vous pouvez modifier manuellement le nombre de processus de traitement dans le cluster à l’aide de l’outil de ligne de commande slc sans arrêter l’application.

Par exemple, en supposant que vous avez déployé votre application sur prod.foo.com et que StrongLoop PM est en mode écoute sur le port 8701 (par défaut), pour définir la taille du cluster sur 8 à l’aide de slc :


$ slc ctl -C http://prod.foo.com:8701 set-size my-app 8

Pour plus d’informations sur la mise en cluster avec StrongLoop PM, voir Clustering dans la documentation StrongLoop.

Mettre en cache les résultats d’une demande
Pour améliorer les performances en production, vous pouvez également mettre en cache le résultat des demandes, de telle sorte que votre application ne répète pas l’opération de traitement de la même demande plusieurs fois.

Utilisez un serveur de mise en cache tel que Varnish ou Nginx (voir aussi Nginx Caching) pour améliorer considérablement la vitesse et les performances de votre application.

Utiliser un équilibreur de charge
Quel que soit le niveau d’optimisation d’une application, une instance unique ne peut traiter qu’un volume limité de charge et de trafic. Pour faire évoluer une application, vous pouvez exécuter plusieurs instances de cette application et répartir le trafic en utilisant un équilibreur de charge. La configuration d’un équilibreur de charge peut améliorer les performances et la vitesse de votre application et lui permettre d’évoluer plus largement qu’avec une seule instance.

Un équilibreur de charge est généralement un proxy inverse qui orchestre le trafic entrant et sortant de plusieurs instances d’application et serveurs. Vous pouvez facilement configurer un équilibreur de charge pour votre application à l’aide de Nginx ou de HAProxy.

Avec l’équilibrage de charge, vous devrez peut-être vérifier que les demandes associées à un ID de session spécifique sont connectées au processus dont elles sont issues. Ce procédé est appelé affinité de session (ou sessions persistantes) et peut être effectué en utilisant un magasin de données tel que Redis pour les données de session (en fonction de votre application), comme décrit ci-dessus. Pour en savoir plus, voir Using multiple nodes.

Utilisation de StrongLoop PM avec un équilibreur de charge Nginx

StrongLoop Process Manager est intégré à un contrôleur Nginx, ce qui permet de paramétrer facilement les configurations d’environnement de production à plusieurs hôtes. Pour plus d’informations, voir Scaling to multiple servers (documentation StrongLoop).

Utiliser un proxy inverse
Un proxy inverse accompagne une application Web et exécute des opérations de prise en charge sur les demandes, en plus de diriger les demandes vers l’application. Il peut gérer les pages d’erreur, la compression, la mise en cache, le dépôt de fichiers et l’équilibrage de charge entre autres.

La transmission de tâches qui ne requièrent aucune connaissance de l’état d’application à un proxy inverse permet à Express de réaliser des tâches d’application spécialisées. C’est pour cette raison qu’il est recommandé d’exécuter Express derrière un proxy inverse tel que Nginx ou HAProxy en production.


