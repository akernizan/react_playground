import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
  //with static you don't need to instanciate the class to access Proptypes
  static propTypes = {
    addPlayer: PropTypes.func,
  }

  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.playerInput.current.value !== '') {
      this.props.addPlayer(this.playerInput.current.value);
      e.currentTarget.reset();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={this.playerInput}
          placeholder="Enter a player's name"
        />

        <input
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;
