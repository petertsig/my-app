import React from 'react';
import './App.css';
import { findAllInRenderedTree } from 'react-dom/test-utils';

function paragraph(copy: string) {
return (  <p>
  {copy}
</p>)
}

const copy = "Edit <code>src/App.tsx</code> and save to reload.";

function App() {
  return (
      <div className="Input">
        <label>Your comments here</label>
          <input type="text"></input>
      </div>
       );
}





export default App;
