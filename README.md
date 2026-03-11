# Site météo en Javascript

## Consignes : 
Weather Dashboard
Objectif
Développer une application web interactive permettant de consulter la météo en temps réel pour n'importe quelle ville et de gérer une liste de favoris persistante.

Fonctionnalités attendues
Recherche dynamique : L'utilisateur doit pouvoir saisir le nom d'une ville via un champ de saisie.
Affichage des données : Présenter au minimum le nom de la ville, la température actuelle et une description du temps (ex: Ensoleillé).
Gestion des Favoris : Un bouton doit permettre d'ajouter la ville actuellement consultée à une liste de favoris.
Persistance des données : La liste des favoris doit être sauvegardée dans le stockage local du navigateur afin d'être conservée après un rafraîchissement ou une fermeture de la page.
Contraintes Techniques
Programmation Orientée Objet : Vous devez obligatoirement structurer vos données météo à l'aide d'une class JavaScript.
Gestion des erreurs : Utilisez des blocs try/catch pour intercepter et gérer les éventuelles erreurs (ville introuvable, problème de connexion au réseau, etc.).
Asynchronisme : Utilisez fetch pour interagir avec les API externes.
Intégration de l'API Open-Meteo
L'application récupère ses informations en deux temps via les services gratuits d'Open-Meteo :

Géocodage : Transformer le nom de la ville en coordonnées géographiques (Latitude et Longitude).
URL : https://geocoding-api.open-meteo.com/v1/search?name=VILLE&count=1&language=fr&format=json
Météo : Récupérer les données météo en temps réel à partir des coordonnées obtenues.
URL : https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LONG&current_weather=true


## Authors

 **Baptiste COUTAS**

## Ressources
mon cours ☺