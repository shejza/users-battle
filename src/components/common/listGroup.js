import React from 'react';


const ListGroup = (props) => {

  const {genres, textProperty, valueProperty, onFilterChange, selectedItem} = props;

  return(<ul className="list-group">
    {genres.map(genre =>
      <li className={ genre=== selectedItem ? 'list-group-item active' : 'list-group-item' } key={genre[valueProperty]} onClick={()=> onFilterChange(genre)}>{genre[textProperty]}</li>
    )}
  </ul>);
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
