import React from 'react';
import Button from 'react-bootstrap/Button'

const Search = (props) => {
  return (
    <div>
        <form onSubmit={props.onSubmit} >
          <input
            type="text"
            placeholder="Search Gifs here"
            onKeyUp={props.onInput}
          />
          <Button variant="primary" type="submit" value="submit" style={{ marginLeft: "10px" }}>Search</Button>
        </form>
    </div>
  )
}

export default Search;