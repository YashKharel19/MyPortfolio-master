import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const IntlRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={() => {
      return <Component  />;
    }}
  />
);

IntlRoute.propTypes = {
  component: PropTypes.any,
};

export default IntlRoute;
