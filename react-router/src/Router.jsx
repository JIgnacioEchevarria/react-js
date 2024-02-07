import { Children, useEffect, useState } from 'react'
import { EVENTS } from './consts.js'
import { match } from 'path-to-regexp';

export function Router({ children, routes = [], defaultComponent: DefaultComponent }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
    // useEffect para navegar en la pagina
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname);
      }
  
      // pushstate evento para ir hacia adelante
      window.addEventListener(EVENTS.PUSH_STATE, onLocationChange);
  
      // popstate evento para ir hacia atras
      window.addEventListener(EVENTS.POP_STATE, onLocationChange);
  
      return () => {
        window.removeEventListener(EVENTS.PUSH_STATE, onLocationChange);
        window.removeEventListener(EVENTS.POP_STATE, onLocationChange);
      }
    }, [])

    let routeParams = {}

    const routesFromChildren = Children.map(children, ({ props, type }) => {
      const { name } = type;
      const isRoute = name === 'Route';

      return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren);
  
    const Page = routesToUse.find(({ path }) => {
      if(path === currentPath) return true

      // utilizo path-to-regexp para poder detectar
      // rutas dinamicas
      const matchedUrl =  match(path, { decode: decodeURIComponent })
      const matched = matchedUrl(currentPath);
      if(!matched) return false
      
      // guardar los parametros de la url que eran dinamicas
      // y que hemos extraido con path-to-regexp
      // por ejemplo si la ruta es /search/:query
      // y la url es /search/javascript
      // matched.params.query === 'javascript
      routeParams = matched.params
      return true
    })?.Component
  
    return Page 
      ? <Page routeParams={routeParams} /> 
      : <DefaultComponent routeParams={routeParams} />
  }