import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './pages/Home';
import { PokemonDetails } from './pages/PokemonDetails';
import { FiltersProvider } from './context/filters.jsx';

function App() {
  return (
    <FiltersProvider>
    <>
      <div className="page">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
      </Routes>
    </> 
    </FiltersProvider>
  )
}

export default App
