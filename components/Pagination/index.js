import React from 'react';
import uniqid from 'uniqid';
import range from '@utils/range';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';


const _Pagination = props => {
    const {
        currentPage,
        totalPages,
        limit,
        onPageChange,
    } = props;

    const offset = Math.ceil(totalPages / limit);
    const pageNumber = range(1, offset);
    
    return (
        <Pagination>
             <PaginationItem
                disabled={currentPage <= 1}
                onClick={() => onPageChange(pageNumber[0])}
             >
                <PaginationLink
                    first
                    href="#"
                />
            </PaginationItem>
            <PaginationItem
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage <= 1 ? currentPage : currentPage - 1)}
            >
                <PaginationLink
                    href="#"
                    previous
                />
            </PaginationItem>
            {totalPages && currentPage && Array.from({ length: offset }, (_, index) => (
                <PaginationItem 
                    key={uniqid()} 
                    onClick={() => onPageChange(pageNumber[index])} 
                    active={currentPage === pageNumber[index]}
                >
                    <PaginationLink href='#'>
                        { pageNumber[index] }
                    </PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem
                disabled={currentPage >= offset}
                onClick={() => onPageChange(currentPage >= offset ? currentPage : currentPage + 1)}
            >
                <PaginationLink
                    href="#"
                    next
                />
            </PaginationItem>
            <PaginationItem
                disabled={currentPage >= offset}
                onClick={() => onPageChange(pageNumber[offset - 1])}
            >
                <PaginationLink
                    href="#"
                    last
                />
            </PaginationItem>
        </Pagination>
    );
}

export default _Pagination;