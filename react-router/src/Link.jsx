import { EVENTS } from './consts.js'

export function navigate(href) {
    // cambia la urlde la barra de direcciones
    window.history.pushState({}, '', href);
  
    const navigationEvent = new Event(EVENTS.PUSH_STATE);
    window.dispatchEvent(navigationEvent);
}


// funcion para linkear
export function Link({ target, to, ...props }) {
    const handleClick = (event) => {
        // eventos de teclas para navegar
        const isMainEvent = event.button === 0;
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
        const isManageableEvent = target === undefined || target === '_self';

        if(isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault();
            navigate(to)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props}></a>
}