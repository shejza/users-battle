import _ from 'lodash';

export function  paginate(itemsCount, currentPage, pageSize) {

  const startIndex = (currentPage - 1) * pageSize;

  return _(itemsCount).slice(startIndex).take(pageSize).value();
  
}