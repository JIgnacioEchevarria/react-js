import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
