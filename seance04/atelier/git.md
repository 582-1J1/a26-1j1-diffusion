# Atelier : Récupérer le matériel de cours avec Git

Tout le matériel du cours (notes de cours, exemples, exercices) est publié sur GitHub. Git est l'outil qui permet de télécharger ce matériel sur votre ordinateur et de le mettre à jour à chaque séance.

Vous n'avez pas besoin de créer de compte GitHub ni d'apprendre Git en profondeur. Deux commandes suffisent pour tout le cours.

### Installer Git

- **Dans les laboratoires du Cégep** : Git est déjà installé, vous n'avez rien à faire.
- **Sur votre ordinateur personnel** : téléchargez l'installateur officiel sur [git-scm.com/downloads](https://git-scm.com/downloads) et lancez-le en conservant les options par défaut (suivant, suivant, suivant).

Une fois Git installé, ouvrez un terminal dans VSCode (faites un clic-droit sur le dossier de votre cours, puis choisir l'option « Ouvrir dans le terminal intégré » ou l'équivalent).

### Cloner le dépôt (une seule fois)

Cette étape télécharge tout le matériel du cours dans un nouveau dossier. Elle ne se fait qu'une seule fois, au tout début de la session.

1. Dans le terminal, assurez-vous encore une fois que vous êtes placé dans le dossier où vous voulez conserver le matériel du cours (par exemple le dossier « 1j1 » ou l'équivalent pour vous).
2. Tapez la commande suivante :

```
git clone https://github.com/582-1J1/a26-1j1-diffusion.git 1j1-diffusion-prof
```

3. Un nouveau dossier nommé `1j1-diffusion-prof` apparaît. Il contient tout le matériel du cours.

> ⚠️ **Important** : le dossier `1j1-diffusion-prof` sert uniquement de source pour consulter le matériel de cours. Ne supprimez, n'ajoutez et ne modifiez jamais aucun fichier à l'intérieur de ce dossier. Si vous voulez travailler à partir d'un code distribué (par exemple un gabarit), copiez-collez-le dans votre propre dossier de travail avant d'y toucher.

### Mettre à jour le matériel (à chaque séance)

Le contenu du dépôt sur GitHub est mis à jour régulièrement par l'enseignant. Au début de chaque séance, récupérez les dernières modifications avec la commande `pull` :

1. Ouvrez un terminal dans le dossier `1j1-diffusion-prof` créé précédemment.
2. Tapez la commande suivante :

```
git pull
```

3. Les nouveaux fichiers et les modifications s'ajoutent automatiquement à votre dossier.

> 🛠️ **En cas de problème** : si vous avez modifié un fichier du dossier `1j1-diffusion-prof` malgré la consigne et que la commande `git pull` refuse de fonctionner, exécutez les deux commandes suivantes pour remettre le dossier exactement comme sur GitHub (attention, cela efface définitivement vos modifications locales) :
>
> ```
> git fetch origin
> git reset --hard origin/main
> ```

### Pour aller plus loin (optionnel, hors cours)

Si vous préférez éviter la ligne de commande sur votre ordinateur personnel, vous pouvez installer [GitHub Desktop](https://desktop.github.com/), une application avec une interface graphique qui permet de cloner un dépôt et de le mettre à jour en cliquant simplement sur un bouton. Cette étape est entièrement facultative et ne sera pas couverte en classe.