import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
        );
    }
const Paginasi = () => {
  return (
    <div>
            <Pagination className="justify-content-center m-auto w-75">
                <Pagination.First />
                <Pagination.Prev />
                {items}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
    </div>
  )
}

export default Paginasi
