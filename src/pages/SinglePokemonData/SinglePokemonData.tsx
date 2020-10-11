import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import PokemonDetailsAPI from "../../api/PokemonDetailsAPI";
import BackIcon from './../../assets/svg/back.svg';
import HeartIcon from './../../assets/svg/heart.svg';

interface PokemonDetails {
  name?: string,
  sprites?: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

const SinglePokemonData = () => {

  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>({});
  const { id } = useParams();

  useEffect(() => {
    PokemonDetailsAPI
      .index(id)
      .then(r => { setPokemonDetails(r.data); console.log(r.data) });
  }, [id]);

  return (
    <section className="s-pokemon-details">
      <div className="s-pokemon-details__topbar">
        <Link className="s-pokemon-details__topbar--back" to={location => ({ ...location, pathname: `/pokedex` })}>
          <img src={BackIcon} alt="Back button" style={{width: 64, height: 64}}/>
        </Link>
        <button className="s-pokemon-details__topbar--heart">
          <img src={HeartIcon} alt="Back button" style={{width: 64, height: 64}}/>
        </button>
      </div>
      <img className="s-pokemon-details__image" src={pokemonDetails.sprites?.other['official-artwork'].front_default} alt={`${pokemonDetails.name} official artwork`}/>
      <div className="s-pokemon-details__content">
        <ul className="s-pokemon-details__content--menu">
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Base stats</button>
          </li>
          <li>
            <button>Evolution</button>
          </li>
          <li>
            <button>Moves</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SinglePokemonData;