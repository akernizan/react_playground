import React  from 'react';
import { Provider } from './Context/index.js';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
    return (
      <div className="scoreboard">
        <Header />
        <PlayerList />
        <AddPlayerForm />
      </div>

    );  
}

export default App;
