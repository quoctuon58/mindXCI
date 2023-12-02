import React from 'react'

const Filter = ({filter_todo}) => {
  return (
    
    <form name="" id="" onChange={((e) => filter_todo(e.target.value))}>
            {/* <button value="">All</button> */}
            <button value="All">All</button>
            <button value="Active">Active</button>
            <button value="Completed">Completed</button>
          </form>
    
  )
}

export default Filter