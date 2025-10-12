# SIOsecure - Site Web Officiel

Site web officiel de SIOsecure, ESN française spécialisée en infogérance, hébergement, cybersécurité, administration système et réseau, ainsi qu'en développement web et mobile. Notre datacenter est basé en France (infrastructure externalisée) et nous accompagnons nos clients dans la conception, la sécurisation et l'optimisation de leurs solutions numériques.


## Déploiement sur GitHub Pages

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages.


### Configuration automatique (recommandé)

Le projet inclut un workflow GitHub Actions qui déploie automatiquement le site à chaque push sur la branche `main`.

1. **Activez GitHub Pages dans les paramètres du dépôt :**
   - Allez dans `Settings` > `Pages`
   - Source : sélectionnez `GitHub Actions`
2. **Poussez votre code sur GitHub :**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. Le site sera automatiquement déployé à l'adresse configurée dans le fichier `CNAME` : `siosecure.joliciel.pro`




### Installation

```bash
npm install
```


### Déploiement manuel (optionnel)

Si vous préférez déployer manuellement :

```bash
npm run deploy
```

Cette commande :
- Construit le projet (`npm run build`)
- Déploie le dossier `dist` sur la branche `gh-pages`



## Configuration du domaine personnalisé

Le fichier `CNAME` contient le domaine personnalisé : `giganet.joliciel.pro` (modifiez-le si vous souhaitez utiliser `siosecure.joliciel.pro`)

2. Configurez les DNS de votre domaine pour pointer vers GitHub Pages




## Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la build de production
npm run preview
```



## Technologies utilisées

- React 18
- TypeScript

## Structure du projet

```
.
├── public/              # Fichiers statiques
│   └── SIOsecure_logo.png
├── src/
│   ├── App.tsx         # Composant principal
│   ├── main.tsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── .github/
│   └── workflows/
│       └── deploy.yml  # Configuration GitHub Actions
├── CNAME               # Configuration du domaine personnalisé
└── vite.config.ts      # Configuration Vite
```

## Licence

© 2025 SIOsecure. Tous droits réservés.
