import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Header, Menu} from "./components";
import {MenuContext} from "../../contexts/MenuContext";
import PokemonDetailsAPI from "../../api/PokemonDetailsAPI";

interface MainProps {
  children?: React.ReactNode
}

const Main: FunctionComponent<MainProps> = (props) => {

  const [pokemonDetails, setPokemonDetails] = useState({
    types: [
      {
        type: {
          name: 'normal'
        }
      }
    ]
  });
  const { showMenu } = useContext(MenuContext);
  const { id } = useParams();

  useEffect(() => {
    if(id)
      PokemonDetailsAPI
        .index(id)
        .then(r => setPokemonDetails(r.data));
  }, [id]);

  return (
    <section className={id ? `u-background u-background--${pokemonDetails.types[0].type.name} s-main` : 's-main'}>
      <Header />
      {showMenu && <Menu />}
      <main>{props.children}</main>
    </section>
  );
};

export default Main;