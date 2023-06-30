import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/search/${searchInput}`)
    setSearchInput('')
  }

  return (
    <form className='relative' onSubmit={submitHandler}>
      <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search" className='outline-none p-2 rounded-full text-sm w-60 sm:w-80' style={{borderWidth:1}} value={searchInput}/>
      <button type="submit">
        <MagnifyingGlassIcon className="absolute h-6 top-2 right-3 bg-white text-gray-400"/>
      </button>
    </form>
  )
}

export default Search