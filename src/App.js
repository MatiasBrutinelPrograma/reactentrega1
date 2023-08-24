import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi Tienda" />
    </div>
  );
}

export default App;
