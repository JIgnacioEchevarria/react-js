import { transformId } from '../transformID.js';

export function Pokemon({ info }) {
    return (
        <div className="pokemon">
            <p className="pokemon-id-back">#{transformId(info.id)}</p>
            <div className="pokemon-img">
                <img src={info.img} alt={info.name} />
            </div>
            <div className="pokemon-info">
                <div className="pokemon-info-top">
                    <p className="pokemon-id">#{transformId(info.id)}</p>
                    <h2 className="pokemon-name">{info.name}</h2>
                </div>
                <div className="pokemon-types">
                    {info.types.map((type, index) => (
                        <p key={index} className={`${type} type`}>{type}</p>
                    ))}
                </div>
                <div className="pokemon-stats">
                    <p className="stat">{info.height}m</p>
                    <p className="stat">{info.weight}kg</p>
                </div>
            </div>
        </div>
    )
}
