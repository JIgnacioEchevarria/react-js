import { useLocation } from "react-router-dom";
import '../App.css'
import { transformId } from '../transformID.js'
import React from "react";


export const PokemonDetails = React.memo(() => {
    const location = useLocation();
    const poke = location.state;
    
    return (
        <div className="pokemonDt">
            <p className="pokemonDt-id">#{transformId(poke.id)}</p>
            <div className="pokemonDt-image">
                <img src={poke.img} alt={poke.name} />
            </div>
            <div className="pokemonDt-info">
                <h2 className="pokemonDt-name">{poke.name}</h2>
                <div className="pokemonDt-types">
                    <h3>tipos</h3>
                    <div>
                        {poke.types.map((type, index) => (
                            <p key={index} className={`${type} type`}>{type}</p>
                        ))}
                    </div>
                </div>
                <h3 className="pokemonDt-quality">altura <span>{poke.height}m</span></h3>
                <h3 className="pokemonDt-quality">peso <span>{poke.weight}kg</span></h3>
                <div className="pokemonDt-stats">
                    {poke.stats.map((stat, index) => (
                        <p key={index}>
                            <span>{stat.base_stat}</span> <span>{stat.stat.name}</span>
                        </p>
                    ))}
                </div>
                <div className="pokemonDt-abilities">
                    <h3>habilidades</h3>
                    <div>
                        {poke.abilities.map((ability, index) => (
                            <p key={index}>{ability}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
});
