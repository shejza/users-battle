import React from 'react';
import _ from 'lodash';
import '../App.css';
import PropTypes from 'prop-types';


const Pagination = props => {

  const {itemsCount, pageSize, currentPage, onPageChange} = props;
  const pagesCount = Math.ceil(itemsCount - pageSize); // E kthejna ne integer se eshte float number result eshte 0.9 e neve na duhet numer i plot
  console.log(currentPage);
if(pagesCount === 1) return null;
  const pages = _.range(1, pagesCount +1);

  return (<div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">

          {pages.map(page =>
            <li className={page=== currentPage ? "page-item active": "page-item"} key={page}><a className="page-link" href="#" onClick={() => onPageChange (page)}>{page}</a></li>
          )}


        </ul>
      </nav>
    </div>
  );

}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize:PropTypes.number.isRequired,
  currentPage:PropTypes.number.isRequired,
  onPageChange:PropTypes.func.isRequired,
};
export default Pagination;
