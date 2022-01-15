import React from 'react';
import './styles.scss';


const PokemonThumbnail = ({id, image, name, type, }) => {
    return (
        <div className="thumb__wrapper">
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail__wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumbnail;