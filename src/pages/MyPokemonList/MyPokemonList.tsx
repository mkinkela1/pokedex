import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {FavouritePokemonContext} from "../../contexts/FavouritePokemonContext";

const MyPokemonList = () => {

  const { favouritePokemonData } = useContext(FavouritePokemonContext);

  return (
    <>
      {
        favouritePokemonData && favouritePokemonData.length > 0 ?
          favouritePokemonData.map((pokemon: any, idx: number) => {
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
        : 'Nothing on this list'
      }
    </>
  );
};

export default MyPokemonList;