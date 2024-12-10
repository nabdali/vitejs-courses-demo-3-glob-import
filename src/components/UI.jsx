// Utiliser glob pour importer tous les composants du répertoire
const components = import.meta.glob('./*.jsx', { eager: true });

// Dynamiser l'accès aux composants via un objet
const UI = Object.fromEntries(
  Object.entries(components).map(([key, value]) => [
    key.replace('./', '').replace('.jsx', ''),
    value.default,
  ])
);

export default UI;
