import React, { useState } from 'react'
const Search = ({setSearchName}) => {
    const [filtre,setFiltre]=useState("")

  return (
    <div>
      <input placeholder='search for movie' onChange={(e)=>setSearchName(e.target.value)}/>
    </div>
  )
}

export default Search
