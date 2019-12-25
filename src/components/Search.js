import React, { Component } from 'react';

const Search = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} >
        <input
          type="text"
          placeholder="Search here"
          onKeyUp={props.onInput}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Search;