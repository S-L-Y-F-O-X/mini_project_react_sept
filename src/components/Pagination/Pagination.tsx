import {FC} from "react";

import css from './Pagination.module.css'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber: number) => {
        onPageChange(pageNumber);
    };

    return (
        <div className={css.Pagination}>
            <button onClick={handlePrevClick} disabled={currentPage === 1}>&#10094;</button>
            {pageNumbers.map((pageNumber) => {
                const isActive = pageNumber === currentPage;
                if (pageNumber === 1 || pageNumber === totalPages || Math.abs(pageNumber - currentPage) <= 2) {
                    return (
                        <button key={pageNumber} onClick={() => handlePageClick(pageNumber)} style={{ backgroundColor: isActive ? "#430457" : "" }}>
                            {pageNumber}
                        </button>
                    );
                } else if (pageNumber === 2 && currentPage >= 5 || pageNumber === totalPages - 1 && currentPage <= totalPages - 4) {
                    return <button key={pageNumber}>...</button>;
                }
                return null;
            })}
            <button onClick={handleNextClick} disabled={currentPage === totalPages}>&#10095;</button>
        </div>
    );
};

export {
    Pagination
};