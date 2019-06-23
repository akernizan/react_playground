import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class Player extends PureComponent {
  //with static you don't need to instanciate the class to access Proptypes
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
  }

  render () {
    // use variable assignment to destructure props in classes
    const {
      name,
      id,
      score,
      index,
      changeScore,
      removePlayer
    } = this.props

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(this.props.id)}>✖</button>
          { name }
        </span>

        <Counter
          score={score}
          index={index}
          changeScore={changeScore}/>
      </div>
    );
  };

}

export default Player;
