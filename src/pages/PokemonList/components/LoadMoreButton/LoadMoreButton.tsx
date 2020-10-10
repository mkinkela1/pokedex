import React, {useContext} from "react";
import {PokemonListContext} from "../../../../contexts/PokemonListContext";

const LoadMoreButton = () => {

  const { loadMorePokemon } = useContext(PokemonListContext);

  return (
    <button className="e-load-more" onClick={() => {
      if (loadMorePokemon) {
        loadMorePokemon()
      }
    }}>
      Load
    </button>
  )
}

export default LoadMoreButton;