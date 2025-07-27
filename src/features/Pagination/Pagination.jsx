
export const Pagination = ({ totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];
  let maxPages = Math.ceil(totalUsers / 10);

  if (maxPages > 0) {
    pageNumbers.push(1);
  }

  if (currentPage > 3 && maxPages > 5) {
    pageNumbers.push('left-ellipsis');
  }
  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(maxPages - 1, currentPage + 1);

  for (let i = startPage; i <= endPage; i++) {
    if (i > 1 && i < maxPages) {
      pageNumbers.push(i);
    }
  }
  if (currentPage < maxPages - 2 && maxPages > 5) {
    pageNumbers.push('right-ellipsis');
  }

  if (maxPages > 1) {
    pageNumbers.push(maxPages);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((number, index) => {
        if (typeof number === 'string' && number.includes('ellipsis')) {
          return (
            <li key={number} className="pagination__ellipsis">
              ...
            </li>
          );
        }

        return (
          <li
            key={number}
            className={`pagination__page ${currentPage === number ? 'pagination__page--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              paginate(number);
            }}
          >
            {number}
          </li>
        );
      })}
    </ul>)

}