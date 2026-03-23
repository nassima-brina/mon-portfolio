# Portfolio — Brina Nassima

Portfolio personnel développé avec React, Vite, TypeScript et Tailwind CSS dans le cadre du cours **Développement Front-End moderne avec React**.

🔗 **Live** : https://mon-portfolio-w88d.vercel.app

---

## Aperçu

![Portfolio Preview](https://mon-portfolio-w88d.vercel.app)

---

## Stack technique

| Technologie | Rôle |
|-------------|------|
| React 18 + TypeScript | Framework UI + typage |
| Vite | Build tool ultra-rapide |
| Tailwind CSS v3 | Styles utilitaires |
| shadcn/ui | Composants accessibles |
| React Router v6 | Navigation SPA |
| React Helmet Async | SEO par page |
| Framer Motion | Animations |

---

## Pages

- **Home** — Présentation, compétences et liens
- **Projets** — Projets académiques avec tags et liens GitHub
- **Parcours** — Compétences transversales et langues
- **Formations** — Diplômes, cours et timeline
- **Certifications** — Badges, filtre et liens de vérification
- **Contact** — Email, téléphone et réseaux sociaux

---

## Lancer en local
```bash
git clone https://github.com/nassima-brina/mon-portfolio.git
cd mon-portfolio
npm install
npm run dev
```

Ouvre http://localhost:5173 dans ton navigateur.

---

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualise le build local |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run format` | Formate le code avec Prettier |

---

## Structure du projet
```
src/
├── app/
│   ├── router.tsx        
│   └── RootLayout.tsx   
├── components/
│   └── ui/              
├── data/
│   ├── profile.ts       
│   ├── projects.ts       
│   ├── education.ts     
│   └── certifications.ts 
└── pages/
    ├── Home.tsx
    ├── Projects.tsx
    ├── Experience.tsx
    ├── Education.tsx
    ├── Certifications.tsx
    └── Contact.tsx
```

---

## Déploiement

Déployé automatiquement sur **Vercel** à chaque push sur `main`.

---

## Auteur

**Brina Nassima**  
Étudiante en Licence Systèmes Informatiques Répartis  
📧 brinanassima59@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/nassima-brina)  
🐙 [GitHub](https://github.com/nassima-brina)
