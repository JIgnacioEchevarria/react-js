import { useContext } from "react";
import { BagContext } from "../context/bag.jsx";

export function useBag () {
    const bag = useContext(BagContext);

    if(bag === undefined) {
        throw new Error('useBag must be used withing a BagProvider')
    }

    return bag;
}