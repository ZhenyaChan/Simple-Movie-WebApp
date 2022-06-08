import React from 'react';
import { useState } from 'react';

const SearchBox = (props) => {

  const [searchBox, setSearchBox] = useState("");


  return (
    <section className="search-box-container">

      <form action="" className="grid grid-col-1">
        <input placeholder="Enter Movie Title" className="form-control" type="text" id="filter" value={searchBox} onChange={(event)=>{
          setSearchBox(event.target.value);
          props.onFilter(event.target.value);
        }} />
      </form>

    </section>
  );
};

export default SearchBox;
