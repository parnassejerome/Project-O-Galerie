# Cahier des Charges : O’Galerie - Plateforme d'exposition artistique

---

## Présentation du Projet

O’Galerie est une plateforme en ligne dédiée aux
artistes visuels, offrant ainsi un espace pour exposer
et partager leurs oeuvres.

Cette galerie virtuelle permet aux artistes de se
créer un profil personnalisé, d'enregistrer des
images de leurs créations, de les catégoriser selon
divers styles, thèmes et médiums.

Les utilisateurs peuvent parcourir la galerie,
filtrer les œuvres par artiste, tags, style et
support, laisser des commentaires, ajouter des
favoris et contacter les artistes pour des demandes
d'informations, d'éventuels achats ou collaborations.

---

## Définition des Besoins et Objectifs

### Besoins :

* Offrir un espace aux artistes pour exposer et partager leurs œuvres.
* Permettre aux utilisateurs d'explorer la galerie, filtrer les œuvres et interagir avec les artistes.

### Objectifs :

* Créer une plateforme intuitive pour les artistes et les utilisateurs.
* Permettre aux artistes de gérer leur profil et leurs œuvres.
* Faciliter l'exploration des œuvres pour les utilisateurs.

### Glossaire :

* **Utilisateur** : visiteur authentifié sur le site et possédant un profil.
* **Oeuvre** : image au format numérique représentant la création d'un artiste.
* **Collection** :  regroupement d'oeuvres.
* **Artiste** : utilisateur ayant la capacité de publier des oeuvres et de les classer en collections.

---

## Spécifications Fonctionnelles

### Fonctionnalités Clés

1. **Profils d'Artistes :**
Permettre aux artistes de créer un compte et personnaliser leur profil.

2. **Publication d'une Œuvre :**
Permettre aux artistes d'ajouter des œuvres à leur page.

3. **Catégorisation et Exposition :**
Catégoriser les œuvres selon différents critères comme le style, le thème, le médium.

4. **Interaction et Commentaires :**
Permettre aux utilisateurs de laisser des commentaires et des appréciations sur les œuvres.

5. **Recherche Avancée :**
Offrir une fonction de recherche avancée pour filtrer les œuvres.

6. **Profil Utilisateur :**
Permettre aux utilisateurs d'ajouter des œuvres en favoris et consulter les profils des artistes.

7. **Formulaire de contact**
Permettre aux utilisateurs de rentrer en contact avec les artistes via un formulaire.

### MVP (Minimum Viable Product)

* Création des pages artistes;
* Publication et visualisation d'œuvres;
* Catégorisation des œuvres (tags);
* Interaction basique entre les utilisateurs et les artistes (commentaires et favoris);
* Formulaire de contact (utilisateurs -> artistes);
* Recherche simple d'œuvres (filtres);

### Évolutions Potentielles

* Modération de contenus inappropriés (utilisteurs, images, commentaires.).
* Système de recommandations basé sur les préférences des utilisateurs;
* Messagerie asynchrone (messages privés);
* Améliorer l'interface utilisateur;
* Monétisation (page de dons);
* FAQ;
* Page de settings (changer le thème, dark mode, etc).
* Possibilité de changer son statut d'utilisateur pour celui d'artiste;

---

## Spécifications Techniques

### Technologies Utilisées

* Front-end : [React](https://react.dev), [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [TypeScript](https://typescriptlang.org).
* Back-end : [Node.js](https://nodejs.org), [Express](https://expressjs.com), [PostgreSQL](https://www.postgresql.org/)
* Stockage des images : [Cloudinary](cloudinary.com)
* Communication Front-End <-> Back-end : API REST

### Cible du Projet

* Public visé : Artistes visuels (hors artistes musicaux et vidéo) et amateurs d'art.

### Navigateurs Compatibles

* Dektop: Chrome, Firefox, Safari.
* Mobile: Chrome, Firefox, Safari.

### Arborescence de l'Application

![ arborescence du site](./Arborescence_OGalerie.png)

### Routes Prévues

Toutes les routes seront préfixées de _/v1/_.

|URL|HTTP|DESCRIPTION|DONNEES ATTENDUES|AUTHORIZATION|
|---|:---:|---|:---:|---|
|/users/login|POST|user connexion|{email, hash}|
|/users/:role|GET| admin or creator list|{tableau d'users}|
|/users|GET|user list|{tableau d'users}|
||POST|create a user|{email, pseudo, hash, firstname, lastname, birthdate, ville, pays, avatar, rôle}|
|/users/:id|GET|get a user|{email, pseudo, firstname, lastname, birthdate, ville, pays, avatar, rôle}|{{accessToken}}
||PATCH|modify a user|{email, pseudo, hash, firstname, lastname, birthdate, ville, pays, avatar, rôle}|{{accessToken}}
||DELETE|delete a user||{{accessToken}}
|/users/:id/collections|GET|get user collections||
||POST|create a collection|{title}|{{accessToken}}
|/users/:id/artworks|GET|get user artworks||
||POST|create an artwork|{title, date, description, collection, tags}|{{accessToken}}
|/users/:id/comments|GET|get user comments||
||POST|create an comment|{content, artwork}|{{accessToken}}
|/users/:id/favorites|POST|create a favorite||{{accessToken}}
||DELETE|Retire a favorite||{{accessToken}}
|/users/:id/likes|POST|add a like||{{accessToken}}
||DELETE|Retire a like||{{accessToken}}
|/artworks/:id|GET|get an artwork |{objet artwork}|
||PATCH|modify an artwork||{{accessToken}}
||DELETE|delete an artwork||{{accessToken}}
|/artworks|GET|artwork list|{tableau d'artworks}|
|/artworks/random/|GET|get a random artworks list||
|/collections/:id|GET|get a collection||
||PATCH|modify a collection||{{accessToken}}
||DELETE|delete a collection||{{accessToken}}
|/comments/:id|PATCH|modify a comment||{{accessToken}}
||DELETE|Delete a comment||{{accessToken}}
|/tags|GET|tag list||
|/tags/:id|GET|get artworks by tags||

---

## User Stories V1

En tant que | Je veux | Afin de |
|--|--|--|
| Artiste | créer une collection | grouper et présenter ses oeuvres à sa convenance, sur sa page artiste |
| Artiste | renommer une collection | mettre à jour le nom d'une collection si besoin |
| Artiste | supprimer une collection | retirer une collection de sa page artiste |
| Artiste | ajouter une oeuvre | exposer ses créations |
| Artiste | supprimer une oeuvre | retirer une oeuvre de sa page |
| Artiste | modifier une oeuvre | mettre à jour les informations et/ou les images d'oeuvres exposées |
| Artiste | taguer une oeuvre | permettre aux visiteurs de trier les oeuvres selon des critères spécifiques |
| Artiste | accepter les conditions d'utilisations | respecter les règles et conditions du site | 
| Utilisateur | se déconnecter | ne pas laisser sa session active  |
| Utilisateur | consulter ses données personnelles | vérifier ses informations personnelles |
| Utilisateur | modifier son profil et ses données personnelles | modifier ses informations personnelles et personnaliser son profil |
| Utilisateur | supprimer son profil | retirer mon profil de la plateforme |
| Utilisateur | consulter les pages artistes | découvrir des artistes et leurs oeuvres |
| Utilisateur | consulter la page d'une oeuvre | avoir plus de détails sur une oeuvre |
| Utilisateur | liker une oeuvre | montrer son appréciation |
| Utilisateur | mettre une oeuvre en favoris | conserver une trace des oeuvres appréciées |
| Utilisateur | retirer une oeuvre des favoris | actualiser sa liste d'oeuvres appréciées |
| Utilisateur | commenter une oeuvre  | partager mon opinion sur une oeuvre et interagir |
| Utilisateur | contacter la plateforme via un formulaire | entrer en contact par mail avec l'équipe d'O'Galerie |
| Utilisateur | contacter la plateforme via un formulaire | entrer en contact avec les artistes |
| Visiteur anonyme | s'inscrire en tant qu'utilisateur | avoir accès à plus de fonctionnalités et devenir un visiteur identifié |
| Visiteur anonyme | s'inscrire en tant qu'artiste | avoir une page artiste et y partager ses oeuvres |
| Visiteur anonyme | s'authentifier | accéder aux fonctionnalités réservées aux utilisteurs authentifiés |
| Visiteur anonyme | consulter les pages artistes | découvrir des artistes et leurs oeuvres |
| Visiteur anonyme | consulter la page d'une oeuvre |  avoir plus de détails sur une oeuvre |


## User Stories V2

En tant que | Je veux | Afin de |
|--|--|--|
| Artiste | consulter sa messagerie | lire et répondre aux messages des visiteurs ou autres artistes |
| Utilisateur | contacter un artiste via la messagerie | échanger directement avec des artistes sur la plateforme  |
| Utilisateur | changer de profil | avoir un profil artiste et publier des oeuvres  |
| Utilisateur | signaler un commentaire | signaler des commentaire choquant ou ne répondant pas à la réglementation de la plateforme |
| Utilisateur | signaler une œuvre | signaler une image choquante ou ne répondant pas à la réglementation de la plateforme |
| Administrateur | se déconnecter | ne pas laisser sa session active  |
| Administrateur | masquer une œuvre | satisfaire la réglementation de la plateforme  |
| Administrateur | masquer un commentaire | modérer le contenu posté par les utilisateurs  |
| Administrateur | masquer un profil | satisfaire la réglementation de la plateforme  |

---

## Rôles Individuels

* **Product Owner :** Aliénor BERTHINIER
* **Scrum Master :** Sostell TODA
* **Lead Dev Front-end :** Nicolas MOURET
* **Lead Dev Back-end :** Arnaud PITHON
* **Développeurs Front-end :** Nicolas MOURET, Jérôme PARNASSE, Sostell TODA, Aliénor BERTHINIER
* **Développeurs Back-end :** Arnaud PITHON, Nicolas MOURET, Jérôme PARNASSE.
* **Référent Git :** Jérôme PARNASSE, Arnaud PITHON.
* **Référent Technologies :** NextJs, Tailwind : Nicolas MOURET / Express, PostgresSQL : Arnaud PITHON.
