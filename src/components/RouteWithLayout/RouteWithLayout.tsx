import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';

interface RouteWithLayoutProps {
  layout: any;
  component: any;
  exact: boolean;
  path: string;
}

const RouteWithLayout: FunctionComponent<RouteWithLayoutProps> = (
  props: RouteWithLayoutProps
) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;