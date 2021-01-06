
// think of the App.js file as the center of the application.
// Or rather the root component, or the wrapper component that
// houses all of the other components

// React components follow the PascalCase naming convention.
// Knowing this will help you quickly identify whether a function
// is a component or just a regular function

import React from 'react';
import './App.css';
import About from './components/About';

// inside the function it seems that HTML is all that's returned
// but actually, it's not HTML; it's a language called JSX that 
// can represent HTML
function App() {
  return (
    <div>
        <main>
            <About></About>
        </main>
    </div>
  );
}

export default App;