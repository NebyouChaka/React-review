import React from 'react';
import './App.css';
import MovieList from './movieList';
import Nav from './Nav';
import { MovieProvider } from './movieContext';
import AddMovie from './AddMovie';
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie/>
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
