import React from 'react'

function Searchbar({search,setSearch,onSearch}) {
  return (
    <div className='Search'>
        <>
        <input
        type='text'
        placeholder='Enter username....'
        value={search}
        onChange={((e) => setSearch(e.target.value))}
        />
        <button onClick={onSearch}>Search</button>
        </>
    </div>
  )
}

export default Searchbar