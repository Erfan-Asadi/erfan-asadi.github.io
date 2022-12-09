import React, { useState, useEffect } from 'react'

const SearchForm = ({filterProducts}) => {

  const [userInput, setUserInput] = useState('');
  
  useEffect(()=> {
    filterProducts(userInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput])
  
  return (
    <form>
        <input type="search" value={userInput} onChange={(e)=> setUserInput(e.target.value)} placeholder='type to filter...'/>
    </form>
  )
}

export default SearchForm

// Mounting 
// Updating
// Unmounting