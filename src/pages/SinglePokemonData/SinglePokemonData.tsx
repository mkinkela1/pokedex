import React, {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';

import PokemonDetailsAPI from "../../api/PokemonDetailsAPI";
import BackIcon from './../../assets/svg/back.svg';

import {About, BaseStats, Moves} from "./components";
import {FavouritePokemonContext} from "../../contexts/FavouritePokemonContext";
import HeartFavourite from './../../assets/svg/heart_favourite.svg';
import HeartNotFavourite from './../../assets/svg/heart_not_favourite.svg';
import ShinyCharizard from './../../assets/images/shiny_charizard.png';

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
  const [randomNumber, setRandomNumber] = useState<number> (0);
  const { checkIfFavourite, toggleFavourite } = useContext(FavouritePokemonContext);
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
    setRandomNumber(Math.random);
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

  const getImage = () => {

    if(+id === 6 && randomNumber < 0.1)
      return ShinyCharizard
    else return pokemonDetails.sprites?.other['official-artwork'].front_default;
  }

  return (
    <section className="s-pokemon-details">
      <div className="s-pokemon-details__topbar">
        <Link className="s-pokemon-details__topbar--back" to={location => ({ ...location, pathname: `/pokedex` })}>
          <img src={BackIcon} alt="Back button" style={{width: 64, height: 64}}/>
        </Link>
        <button className="s-pokemon-details__topbar--heart" onClick={() => {
          if (toggleFavourite) {
            toggleFavourite(id)
          }
        }}>
          {
            !(checkIfFavourite) || checkIfFavourite(id) ?
              <img src={HeartFavourite} alt="Back button" style={{width: 64, height: 64}}/>
              :
              <img src={HeartNotFavourite} alt="Back button" style={{width: 64, height: 64}}/>
          }
        </button>
      </div>
      <img className="s-pokemon-details__image" src={getImage()} alt={`${pokemonDetails.name} official artwork`}/>
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