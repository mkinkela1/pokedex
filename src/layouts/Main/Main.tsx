import React, {FunctionComponent, useContext} from 'react';
import {Header, Menu} from "./components";
import {MenuContext} from "../../contexts/MenuContext";

interface MainProps {
  children?: React.ReactNode;
}

const Main: FunctionComponent<MainProps> = props => {

  const { showMenu } = useContext(MenuContext);
  const { children } = props;

  return (
    <section className="s-main">
      <Header />
      {showMenu && <Menu />}
      <main>{children}</main>
    </section>
  );
};

export default Main;