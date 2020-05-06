import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Gif from './Gif'
import GifList from './GifList'
import giphy from 'giphy-api'

const GIPHY_API_KEY = 'lPWU9UeSp5f2AKZKK7Fxns1CbLqd5QJk'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: 'xT5LMQ8rHYTDGFG07e'
    }
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g'
      }, (err, result) => {
        // Res contains gif data!
        this.setState({
          gifs: result.data
        })
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App
