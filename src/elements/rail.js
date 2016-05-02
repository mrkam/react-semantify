
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui rail';
const componentName    = 'Rail';

const Rail = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Rail;
