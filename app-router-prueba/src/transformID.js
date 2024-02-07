export const transformId = (id) => {
    let pokeId = id.toString();
    if(pokeId.length === 1) {
      pokeId = "00" + pokeId;
    } else if(pokeId.length === 2) {
      pokeId = "0" + pokeId;
    }
    return pokeId;
}