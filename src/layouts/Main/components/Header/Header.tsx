import React, {useContext} from 'react';

import LogoImage from './../../../../assets/svg/logo.svg';
import MenuIcon from './../../../../assets/svg/menu.svg';
import {MenuContext} from "../../../../contexts/MenuContext";
import {Link} from "react-router-dom";

const Header = () => {

  const { toggleMenu } = useContext(MenuContext);

  return (
    <section className="s-header">
      <div className="s-header__content">
        <Link to={location => ({ ...location, pathname: `/pokedex` })}>
          <img src={LogoImage} alt="Pokemon logo" style={{height: 50}} />
        </Link>
        <button onClick={() => {
          if(toggleMenu)
            toggleMenu();
        }}>
          <img src={MenuIcon} alt="Menu icon"/>
        </button>
      </div>
    </section>
  )
}

export default Header;