# LASAF IMMOBILIER — v1

Première interface Next.js responsive pour LASAF IMMOBILIER en Côte d'Ivoire.

## Fonctionnalités de cette étape
- Accueil responsive aux couleurs bleu marine et or.
- Recherche de démonstration par mot-clé, type et statut.
- Exemples de fiches immobilières.
- Statuts Disponible, Réservé et Vendu.
- Boutons WhatsApp vers le numéro officiel LASAF (+225 01 51 28 86 44).
- Présentation des services : vente, plans 2D/3D, apport d'affaires et gestion immobilière.

**Les annonces sont des exemples statiques.** Aucun compte, dépôt réel, validation serveur ou stockage de coordonnées n'est encore activé. Ces fonctions seront ajoutées avec Supabase et des règles de sécurité testées.

## Prérequis
Node.js 20.9+ et npm.

## Lancer en local
```bash
npm install
npm run dev
```
Ouvrir http://localhost:3000.

## Vérifier la compilation
```bash
npm run build
```

## Sécurité
Ne jamais déposer de mot de passe, token, clé privée ou clé Supabase `service_role` dans GitHub. Le dépôt est public. Les secrets seront configurés dans les variables d'environnement de l'hébergeur.

## Étapes suivantes
1. Supabase Auth et base PostgreSQL.
2. Publication réservée aux membres inscrits.
3. Modération obligatoire par LASAF.
4. Contacts déposants séparés et visibles uniquement par le déposant autorisé et l'administrateur LASAF.
5. Upload photo sécurisé.
6. Tableau de bord administrateur.
7. Génération d'affiches IA et prospection assistée.
8. Applications mobiles Expo.
