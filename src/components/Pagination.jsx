import React from "react";
import { Button,ButtonGroup,Select } from '@chakra-ui/react'

const Pagination = ({totalcount,setLimit,setPage,page,limit}) => {

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button  disabled={page<=1}
       onClick={()=>{ 
          setPage(page-1)
      }} data-cy="pagination-previous-button">Previous</Button>
      <Select  onChange={(e)=>setLimit(Number(e.target.value))} data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button disabled={totalcount<=page*limit} onClick={()=>setPage(page+1)} data-cy="pagination-next-button">Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
