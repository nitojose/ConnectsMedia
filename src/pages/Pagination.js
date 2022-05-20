/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Pagination(props) {
   
    const totalPosts = props.totalPosts ;
    const postsPerPage = props.postsPerPage;
    const paginate = props.paginate;
    const pageNumber = [];

    for(let i =1 ;i<= Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumber.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
    {pageNumber.map(number => (
        <li key={number} className='page-item'>
            <a onClick={()=> paginate(number)} href="#"  className='page-link'>
                {number}
            </a>
        </li>
    ))}
        </ul>
    </nav>
  )
}
