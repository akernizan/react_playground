import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs:[],
      loading: true
    };
  }

  componentDidMount() {
    this.preformSearch();
  }


  preformSearch = (query = 'beyonce') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=774yJt5XrVAhP0CDXyT7SRuv7y2gr5Gb`)
    .then(response => {
        // handle success
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
    .catch(error => {
        // handle error
        console.log('Error fetching and parsing data.', error);
      });
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={ this.preformSearch }/>
          </div>
        </div>
        <div className="main-content">
          { (this.state.loading) ? <p>Loading...</p> : <GifList data={this.state.gifs}/> }  
        </div>
      </div>
    );
  }
}
