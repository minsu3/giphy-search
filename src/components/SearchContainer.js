import React, { Component } from 'react';
import Search from './Search';
import Results from './Results'

class SearchContainer extends Component {
  state = {
    query:'',
    response: []
  }

  search = () => {
    // ?api_key = jLRvlnP8XNkx7nW7LIDVjWC8giYe9Yzw  
    // query param &q = encodeURIComponent(this.state.query)
    let url = `https://api.giphy.com/v1/gifs/search?api_key=jLRvlnP8XNkx7nW7LIDVjWC8giYe9Yzw&q=${encodeURIComponent(this.state.query)}`;
    fetch(url)
      .then(response => response.json())
      // parsed the response into json format
      .then(data => {
        console.log(data)
        this.setState({ response: data.data })
      })
      .catch(error => console.log(error))
  }

  // Invoked before rendering when new props or state are being received. Defaults to true.
  onSubmit = (event) => {
    event.preventDefault()
    this.search()
  }

  onInput= (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    let result = this.state.response.map((data)=> {
      return <Results
        title={data.title}
        link={data}
        newLink={data.embed_url}
      />
    })
    return(
      <div>
        <div className="search">
          <h1>Giphy Search</h1>
          <h2>The true source for all things giphy...</h2>
          <Search 
            onSubmit={this.onSubmit}
            onInput={this.onInput}
          />
        </div>
        <div className="result">
          {this.state.response ? result : 'Loading...'}
        </div>
      </div>
      
    )
  }
}

export default SearchContainer;















