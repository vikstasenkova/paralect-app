import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


function MainContent({repos}) {
    const items = repos 

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
            <div key={item.id} className=" flex flex-col gap-[16px] bg-white h-[112px] w-full px-[32px] my-[24px] py-[24px] rounded-[6px]" >
            <a href={item?.html_url}  target="_blank" rel="noreferrer" className="leading-[29px] text-[24px] font-medium text-blue">{item?.name}</a>
            <p className="leading-[19px] text-[16px]">{item?.description}</p> 
        </  div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex flex-row justify-end h-[25px] gap-[8px] text-grey-1"
        pageClassName="flex w-[21px] justify-center"
        activeClassName="bg-blue rounded-[3px] text-white"
        disabledClassName="text-[#808080]"
        previousClassName="text-blue pr-[10px]"
        nextClassName="text-blue pl-[10px]"
      />
    </>
  );
}

    return (
        <div className="w-full pl-[85px]">
            <h1 className="leading-[42px] text-[32px] font-semibold mb-[29px]">{`Repositories (${repos && repos.length})`}</h1>
              <PaginatedItems itemsPerPage={4} />,
        </div>
    )
}

export default MainContent;