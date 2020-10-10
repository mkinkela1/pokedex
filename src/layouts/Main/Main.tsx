import React, { FunctionComponent } from 'react';

interface MainProps {
  children?: React.ReactNode;
}

const Main: FunctionComponent<MainProps> = props => {
  const { children } = props;

  return (
    <section className="s-main">
      <main>{children}</main>
    </section>
  );
};

export default Main;