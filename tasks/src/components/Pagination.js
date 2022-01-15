import React from 'react'

function Pagination(props) {
    const {count, pagesize, onPageChange, currentpage} = props;
    const pageNumbers=[];
    for (let i =1; i<=Math.ceil(count/pagesize); i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map((page)=>(
                <li key={page} className={page === currentpage ? 'page-item active':'page-item'}>
                    <a class="page-link" onClick={()=>onPageChange(page)}>{page}</a>
                </li>))}
            </ul>
        </div>
    )
}

export default Pagination
