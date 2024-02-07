import { createContext, useReducer } from "react";
import { bagReducer, bagInitialState } from "../reducers/bag";

export const BagContext = createContext();

export function BagProvider ({ children }) {
    const [state, dispatch] = useReducer(bagReducer, bagInitialState);

    const addToBag = pokemon => dispatch({
        type: 'ADD_TO_BAG',
        payload: pokemon
    })

    const removeFromBag = pokemon => dispatch({
        type: 'REMOVE_FROM_BAG',
        payload: pokemon
    })

    return (
        <BagContext.Provider value={{
            bag: state, addToBag, removeFromBag
        }}>
            {children}
        </BagContext.Provider>
    )
}