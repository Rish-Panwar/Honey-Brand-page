import React from 'react'
const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, '...', total);
    } else if (current >= total - 2) {
      pages.push(1, '...', total - 2, total - 1, total);
    } else {
      pages.push(1, '...', current - 1, current, current + 1, '...', total);
    }
  } return pages;
}

const Pagination = ({ page, pageHandler, dynamicPage }) => {
  const pages = getPages(page, dynamicPage);

  return (
    <div className="mt-10 space-x-4">
      <button
        disabled={page === 1}
        onClick={() => pageHandler(page - 1)}
        className={`${
          page === 1 ? "bg-amber-300" : "bg-amber-500"
        } text-white px-3 py-1 rounded-md cursor-pointer`}
      >
        Prev
      </button>

      {pages.map((item, index) => (
        <span
          key={index}
          onClick={() => {
            if (typeof item === "number") pageHandler(item);
          }}
          className={`cursor-pointer ${
            item === page ? "font-bold text-orange-400" : ""
          }`}
        >
          {item} 
        </span>
      ))}

      <button
        disabled={page === dynamicPage}
        onClick={() => pageHandler(page + 1)}
        className={`${
          page === dynamicPage ? "bg-amber-300" : "bg-amber-500"
        } text-white px-3 py-1 rounded-md cursor-pointer`}
      >
        Next
      </button>
    </div>
  );
};


export default Pagination
