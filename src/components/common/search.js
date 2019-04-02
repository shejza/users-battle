import React from 'react';

const SearchBox = (props) => {

  return(
    <div>
      <input type="text" placeholder="Search..." className="form-control" onKeyDown={props.onKeyDown}/>
    </div>
  );
};

export default SearchBox;
