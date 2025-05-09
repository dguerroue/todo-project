# 📝 Todo List Project

Un projet fullstack de gestion de tâches, composé d'une application front-end et d'une API back-end.

Ce projet est réalisé dans le but de pratiquer du dev fullstack, particulièrement le back-end avec Node.js & Express, mongoDB & mongoose, ainsi que le front-end avec React.

## Features
- CRUD (Create, Read, Update, Delete) pour les tâches
- Marquer les tâches comme complétées
- Modifier les tâches
- Filtrer les tâches par statut (complétées / non complétées) et par date
- Cacher les tâches complétées
- Pouvoir afficher les tâches complétées
- Pouvoir supprimer toutes les tâches complétées
- Ajouter un système de priorité (haute, moyenne, basse) (avec des carrés couleurs différentes)

---

## 📁 Structure du projet

- `todo-app` : application front-end (React + Vite)
- `todo-api` : API back-end (Express + MongoDB)

---

## 🧱 Stack technique

### Front-end (`todo-app`)

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Back-end (`todo-api`)

<!-- TUTO CRUD 
  https://www.youtube.com/watch?v=Iv4VIBEBHKk 
-->

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) – ODM pour MongoDB
- [MongoDB](https://www.mongodb.com/)

---

## 🚀 Lancer le projet en local

### 1. Cloner le dépôt

```bash
git clone <url-du-repo>
cd <nom-du-dossier>
```

### 2. Lancer le back-end

```bash
cd todo-api
npm install
npm run server
```

Par défaut, l’API tourne sur `http://localhost:5000`.

### 3. Lancer le front-end

```bash
cd todo-app
npm install
npm run dev
```

L’application sera disponible sur `http://localhost:5173`.

---

## 📌 Fonctionnalités principales

- Ajouter, modifier et supprimer des tâches
- Marquer une tâche comme complétée
- Interface réactive et responsive
- Communication avec une API REST