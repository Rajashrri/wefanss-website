import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (totalPages <= 1) return null;

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
      <ul className="flex justify-center bg-[#fff] md:gap-2 gap-1 py-[40px] flex-wrap">
        
        {/* Previous */}
        <li>
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="hover:bg-[#4285F4] md:gap-2 gap-1 h-[32px] flex transition-all justify-center items-center primary-font opacity-65 hover:opacity-100 hover:text-[#fff] px-2 text-[16px] min-w-[32px] rounded-[8px]"
          >
            ← <span className="md:block hidden">Previous</span>
          </button>
        </li>

        {/* Numbers */}
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => changePage(page)}
              className={`h-[32px] flex justify-center items-center primary-font px-2 text-[16px] min-w-[32px] rounded-[8px]
              
              ${
                currentPage === page
                  ? "bg-[#4285F4] text-white"
                  : "hover:bg-[#4285F4] hover:text-white"
              }
              `}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next */}
        <li>
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="hover:bg-[#4285F4] md:gap-2 gap-1 h-[32px] flex transition-all justify-center items-center primary-font hover:text-[#fff] px-2 text-[16px] min-w-[32px] rounded-[8px]"
          >
            <span className="md:block hidden">Next</span> →
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;