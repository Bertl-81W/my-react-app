

import React from 'react';
import Card from './components/Card'; 
import Navbar from './components/Navbar';
import data from './data.js';

/*import './index.css' */

function App() {
  const cards = data.map(content => {
    return (
      <Card key={content.id} {...content} />      
    )
  });  

  return (
    <div>
      <Navbar />
      <section className="cards--list">
        {cards}
      </section> 
    </div>
  );
}

export default App;

