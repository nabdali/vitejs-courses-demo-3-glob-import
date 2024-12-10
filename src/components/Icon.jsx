import React from 'react';

function Icon({ name }) {
  return <span className={`icon-${name}`}>{name}</span>;
}

export default Icon;
