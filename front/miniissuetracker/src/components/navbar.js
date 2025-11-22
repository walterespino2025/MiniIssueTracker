import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '10px solid #ccc' }}>
      
          <a href="/" style={{textDecoration:'none'}} rel="noopener noreferrer" className="p-button font-bold">
    Issue List
</a><span></span>
<a href="/create" style={{textDecoration:'none'}} rel="noopener noreferrer" className="p-button font-bold">
    Report an Issue
</a>

    </nav>
  );
};

export default Navbar;