import React, { useState, useEffect } from 'react';
import UI from './components/UI';

// Utilisation de glob import pour charger les composants de manière dynamique
const pages = import.meta.glob('./pages/*.jsx', {
  eager: true,
  import: 'default',
});

function App() {
  const [page, setPage] = useState('HomePage'); // Page initiale

  // Charger dynamiquement un composant en fonction du nom de la page
  const loadPage = (pageName) => {
    if (pages[`./pages/${pageName}.jsx`]) {
      const Component = pages[`./pages/${pageName}.jsx`];
      return <Component />;
    }
    return <div>Page Not Found</div>;
  };

  useEffect(() => {
    // Simuler un changement de page en fonction de l'URL ou du bouton
    const timer = setTimeout(() => setPage('AboutPage'), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Welcome to React with Vite and Glob Imports!</h1>
      {loadPage(page)}
      {/* Utilisation des composants dynamiquement via l'objet UI */}
      <UI.Button label="Click Me" onClick={() => alert('Button clicked!')} />
      <UI.Icon name="home" />
      <UI.Card
        title="Card Title"
        content="This is some content for the card."
      />
    </div>
  );
}

export default App;
