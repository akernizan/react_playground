import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Akosua",
        score:0,
        id: 1
      },
      {
        name: "Michael",
        score:0,
        id: 2
      },
      {
        name: "Lisa",
        score:0,
        id: 3
      },
      {
        name: "Machada",
        score:0,
        id: 4
      }
    ]
  };

  //player id Counter
  prevPlayerId = 4;

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  handleScoreChange = (index,delta) => {
    this.setState(prevState => {
      return{
        score: prevState.players[index].score += delta,
        hasCrown: false
      }
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player,index) =>
          <Player
            name={player.name}
            id={player.id}
            index={index}
            score={player.score}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
