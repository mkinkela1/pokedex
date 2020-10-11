import React, {useContext} from 'react';
import {PokemonListContext} from "../../contexts/PokemonListContext";
import LoadMoreButton from "./components/LoadMoreButton";
import {Link} from "react-router-dom";

const PokemonList = () => {

  const { pokemonList } = useContext(PokemonListContext);

  return (
    <>
      {
        pokemonList && pokemonList.length > 0 ?
          pokemonList.map((pokemon: any, idx) => {
            if (pokemon && pokemon.sprites && pokemon.sprites.front_default)
              return (
                <Link to={location => ({ ...location, pathname: `/pokemon/${pokemon.id}` })} key={idx}>
                  <section className={`e-pokemon-card u-background u-background--${pokemon.types[0].type.name}`}>
                    <div className="e-pokemon-card__left">
                      <div className="e-pokemon-card__left--title">{pokemon.name}</div>
                      <div className="e-pokemon-card__left--number">#{String(pokemon.id).padStart(3, '0')}</div>
                      {
                        pokemon.types.map((type: any, idx: number) => (
                          <div className="e-pokemon-card__left--typing" key={idx}>{type.type.name}</div>
                        ))
                      }
                    </div>
                    <div className="e-pokemon-card__right">
                      <img className="e-pokemon-card__right--image" loading={"lazy"} src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} avatar`}/>
                    </div>
                  </section>
                </Link>
              )
            else return <></>
          })
        : ''
      }
      <LoadMoreButton />
    </>
  );
};

export default PokemonList;