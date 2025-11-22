 import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import ItemList from './components/itemlist';
import CreateItem from './components/createItem';
import EditItem from './components/editItem';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primeicons/primeicons.css';
import { Button } from 'primereact/button'; // Import a PrimeReact component

    function App() {
        return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{ padding: '20px' }}>
          <Routes>
            {/* Route for reading/listing items */}
            <Route path="/" element={<ItemList />} />
            {/* Route for creating a new item */}
            <Route path="/create" element={<CreateItem />} />
            {/* Route for editing a specific item, using a URL parameter :id */}
            <Route path="/edit/:id" element={<EditItem />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
    }

    export default App;