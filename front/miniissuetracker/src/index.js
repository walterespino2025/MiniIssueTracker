    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import { PrimeReactProvider } from 'primereact/api'; // Import PrimeReactProvider

    // ... other imports for PrimeReact styles

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <PrimeReactProvider> {/* Wrap your App with PrimeReactProvider */}
          <App />
        </PrimeReactProvider>
      </React.StrictMode>
    );
