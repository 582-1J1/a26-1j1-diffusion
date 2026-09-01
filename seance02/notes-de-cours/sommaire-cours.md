# Séance 2 – Découvrir l'environnement de développement
- Éditeur de code, navigateur Web, projet Web, fichier JavaScript et techniques de débogage

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- reconnaître les rôles de Visual Studio Code et du navigateur Web;
- organiser les premiers fichiers d'un projet Web;
- relier un fichier JavaScript à une page HTML;
- afficher une information dans la console avec `console.log()`;
- utiliser les outils de développement du navigateur pour observer un programme.

## 1. L'éditeur de code et le navigateur Web

Un **éditeur de code** sert à écrire et à organiser les fichiers qui composent un projet. Dans ce cours, nous utiliserons Visual Studio Code.

Un **navigateur Web** sert à ouvrir la page HTML et à exécuter le JavaScript qui lui est associé. Nous utiliserons aussi sa console pour observer ce que fait le programme.

Ces deux outils ont des rôles différents :

| Outil | Rôle principal |
| --- | --- |
| Visual Studio Code | Écrire et organiser le code |
| Navigateur Web | Ouvrir la page et exécuter le code |
| Outils de développement | Observer l'exécution et repérer les erreurs |

## 2. L'arborescence minimale d'un projet

Un projet est un dossier qui rassemble les fichiers nécessaires à une page ou à un jeu. Pour commencer, nous utiliserons cette structure :

```text
mon-projet/
├── index.html
└── assets/
    └── js/
        └── script.js
```

Le fichier `index.html` est la page ouverte par le navigateur. Le fichier `script.js` contient le code JavaScript. Le dossier `assets` regroupe les ressources du projet et le sous-dossier `js` regroupe les fichiers JavaScript.

Cette organisation est simple, mais elle nous prépare à ajouter plus tard une feuille de style, des images et d'autres fichiers.

## 3. Relier HTML et JavaScript

La balise `<script>` indique au navigateur quel fichier JavaScript doit être chargé :

```html
<script src="assets/js/script.js"></script>
```

Dans le gabarit de cette séance, la balise se trouve à la fin de l'élément `<body>`. Le navigateur a ainsi déjà lu la page avant de charger le script.

Le chemin `assets/js/script.js` est **relatif** au fichier `index.html`. Il signifie que le navigateur doit entrer dans `assets`, puis dans `js`, et enfin charger `script.js`.

## 4. Observer le programme avec `console.log()`

La fonction `console.log()` écrit un message dans la console du navigateur :

```js
console.log("Le programme commence.");
```

Pour voir le message :

1. Ouvrez `index.html` dans le navigateur.
2. Ouvrez les outils de développement.
3. Choisissez l'onglet **Console**.
4. Repérez le message affiché par le programme.

La console n'est pas la page visible par le joueur. C'est un espace de travail qui aide le programmeur à vérifier ce qui se passe.

## 5. Les erreurs et le débogage

Le **débogage** consiste à chercher et à corriger un problème dans un programme. Lorsqu'un message n'apparaît pas dans la console, vérifiez dans cet ordre :

- le fichier `index.html` est-il bien ouvert?
- le chemin dans l'attribut `src` correspond-il à l'arborescence?
- le nom du fichier est-il exactement `script.js`?
- la console contient-elle un message d'erreur?
- avez-vous enregistré les fichiers avant de recharger la page?

Lisez le début du message d'erreur. Il indique souvent le fichier et la ligne où le navigateur a rencontré un problème.

## 6. Le lien avec la suite du cours

Le gabarit de base deviendra progressivement le point de départ de notre jeu dans le Canvas. Pour l'instant, nous nous concentrons sur l'organisation des fichiers, le chargement du JavaScript et l'observation de l'exécution.

### À retenir

- Visual Studio Code sert à écrire le code.
- Le navigateur exécute la page et le JavaScript.
- La balise `<script>` relie HTML et JavaScript.
- `console.log()` permet d'observer une information dans la console.
- Une arborescence claire facilite le travail et le débogage.