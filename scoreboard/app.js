const Header = (props) => {
  return  (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
        {props.name}
      </span>
      <Counter score={props.score} />
    </div>
  );
}

class Counter extends React.Component {
  constructor(){
    super()
    this.state = {
      score: 0
    };
  }

  incrementScore(){
    this.setState(prevState => {
      return{
        score: prevState.score + 1
      }
    });
  }

  decrementScore(){
    this.setState(prevState => {
      return {
        score: prevState.score - 1
      }
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <span className="counter-score"> {this.state.score} </span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );

  }

}

class App extends React.Component {
  state = {
    players: [  {
       name: "Akosua",
       id:1
      },
      {
       name: "Michael",
       id:2
      },
      {
       name: "Lisa",
       id:3
      },
      {
       name: "Machada",
       id:4
      }]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }
    });
  }


  render(){
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length}/>

        {/* Players list*/}
        {this.state.players.map( player =>
            <Player
              name={player.name}
              score={player.score}
              key={player.id.toString()}
              id={player.id}
              removePlayer={this.handleRemovePlayer}
            />
        )}
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
