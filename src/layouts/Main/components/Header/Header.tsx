import React, {useContext} from 'react';

import LogoImage from './../../../../assets/svg/logo.svg';
import MenuIcon from './../../../../assets/svg/menu.svg';
import {MenuContext} from "../../../../contexts/MenuContext";

const Header = () => {

  const { toggleMenu } = useContext(MenuContext);

  return (
    <section className="s-header">
      <div className="s-header__content">
        <img src={LogoImage} alt="Pokemon logo" style={{height: 50}} />
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