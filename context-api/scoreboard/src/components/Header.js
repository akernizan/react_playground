import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players }) => {
  return (
    <header>
      <Stats  />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </header>
  );
}



export default Header;
