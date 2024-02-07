import './App.css'
import { Link, Route, Routes, useParams, Outlet } from 'react-router-dom'

function Home() {
  return (
    <h1>Home</h1>
  )
}

function SearchPage() {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]

  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))}
      </ul>
    </div>
  )
}

function Tacos() {
  const { name } = useParams()

  return (
    <div>
      <h1>Tacos</h1>
      <p>{name}</p>
      <Link to='details'>Ir a los detalles</Link>
      <Outlet />
    </div>
  )
}

function TacoDeatils() {
  const { name } = useParams()

  return (
    <h1>Taco Details {name}</h1>
  )
}

function App() {
  return (
    <>
      <header>
        <h1>SPA</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='search-page'>Search Page</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:name' element={<Tacos />}>
          <Route path='details' element={<TacoDeatils />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
