import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';

import PokemonDetailsAPI from "../../api/PokemonDetailsAPI";
import BackIcon from './../../assets/svg/back.svg';
import HeartIcon from './../../assets/svg/heart.svg';

import {About, BaseStats, Moves} from "./components";

interface Move {
  name: string,
  url: string,
  type: {
    name: string
  }
}

interface PokemonDetails {
  name?: string,
  moves?: Move[],
  sprites?: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

const SinglePokemonData = () => {

  const [tabId, setTabId] = useState<number> (0);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>({});
  const { id } = useParams();

  useEffect(() => {
    PokemonDetailsAPI
      .index(id)
      .then(r => { setPokemonDetails(r.data); return r.data })
      //Get moves data
      .then(r => Promise.all(r.moves.map((move: any) => axios(move.move.url))))
      .then(r => {
        const movesData = r.map(({data}: any) => data);
        setPokemonDetails((prevState: PokemonDetails) => ({...prevState, moves: movesData}));
      });
  }, [id]);

  const getTabData = () => {
    switch(tabId) {
      case 0:
        return <About data={pokemonDetails} />;
      case 1:
        return <BaseStats data={pokemonDetails} />
      case 2:
        return <Moves data={pokemonDetails}/>
    }
  }

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
          <li className={tabId === 0 ? 'active' : ''} onClick={() => setTabId(0)}>
            <button>About</button>
          </li>
          <li className={tabId === 1 ? 'active' : ''} onClick={() => setTabId(1)}>
            <button>Base stats</button>
          </li>
          <li className={tabId === 2 ? 'active' : ''} onClick={() => setTabId(2)}>
            <button>Moves</button>
          </li>
        </ul>

        <div className="s-pokemon-details__content--data">
          { getTabData() }
        </div>
      </div>
    </section>
  );
}

export default SinglePokemonData;