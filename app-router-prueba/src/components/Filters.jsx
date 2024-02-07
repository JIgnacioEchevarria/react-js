import { useSearch } from '../hooks/useSearch.js'
import { useFilters } from '../hooks/useFilters.js'
import { Link } from 'react-router-dom';

export function Filters() {
    const { setFilters } = useFilters();
    const { search, updateSearch, error } = useSearch();

    const handleChangeType = (e) => {
        setFilters(prevState => ({
            ... prevState,
            type: e.target.value,
            searchFilter: ''
        }))
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        setFilters(prevState => ({
            ... prevState,
            type: 'all',
            searchFilter: search
        }))
    }

    const handleChangeSearch = (e) => {
        const newSearch = e.target.value;
        updateSearch(newSearch);
    }

    return (
        <section className="filters">
            <nav className="nav">
            <img src="src/images/Pokédex_logo.webp" alt="" />
                <ul className="nav-list">
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="all" className="btn btn-header">ver todos</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="normal" className="btn btn-header normal">normal</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="fire" className="btn btn-header fire">fire</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="water" className="btn btn-header water">water</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="grass" className="btn btn-header grass">grass</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="electric" className="btn btn-header electric">electric</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="ice" className="btn btn-header ice">ice</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="fighting" className="btn btn-header fighting">fighting</button></li> 
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="poison" className="btn btn-header poison">poison</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="ground" className="btn btn-header ground">ground</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="flying" className="btn btn-header flying">flying</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="psychic" className="btn btn-header psychic">psychic</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="bug" className="btn btn-header bug">bug</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="rock" className="btn btn-header rock">rock</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="ghost" className="btn btn-header ghost">ghost</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="dark" className="btn btn-header dark">dark</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="dragon" className="btn btn-header dragon">dragon</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="steel" className="btn btn-header steel">steel</button></li>
                    </Link>
                    <Link to='/'>
                        <li className="nav-item"><button onClick={handleChangeType} value="fairy" className="btn btn-header fairy">fairy</button></li>
                    </Link>
                </ul>   
            </nav>
            <form className="form" onSubmit={handleSubmitSearch}>
                <input type="text" placeholder="Buscar..." onChange={handleChangeSearch} />
                <button type="submit">Buscar</button>
            </form>
            {error && <p style={{color: "red"}}>{error}</p>}
        </section>
    )
}