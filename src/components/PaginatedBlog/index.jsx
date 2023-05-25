import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
// import OurServices from '../OurServices';
import BlogCard from "../Common/BlogCard";



const   PaginatedBlogs = ({ data }) => {
	const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        // setCurrentItems(data?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data?.length;
        setItemOffset(newOffset);
    };


	return (
		<>
			{/* <OurServices data={currentItems} blog={data} service={service} /> */}
			<BlogCard data={data} itemOffset={itemOffset}  />
			<div className='md:mt-[-30px] mt-[30px] mb-[30px] '>
				<ReactPaginate
					breakLabel='...'
					nextLabel='Next »'
					onPageChange={handlePageClick}
					pageRangeDisplayed={4}
					pageCount={pageCount}
					previousLabel='« Previous'
					renderOnZeroPageCount={null}
					containerClassName='services-pagination'
					pageLinkClassName='paginate-link'
					previousLinkClassName='paginate-previous-link'
					activeLinkClassName='paginate-active-link'
					nextClassName='paginate-next-link'
				/>
			</div>
		</>
	);
};

export default PaginatedBlogs;
