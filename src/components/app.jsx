import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "KCkwBFFQ6TSlu2EtoO"
    }
  }

  search = (query) => {
    giphy('lV02w3w7u6MQ3zRoBu1X14vI8nyv99wf').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
          <Gif id={ this.state.selectedGifId } />
        </div>
      </div>
      <div className="right-scene">
        <GifList  gifts={this.state.gifs} />
      </div>
    </div>
    );
  }
}


export default App;
