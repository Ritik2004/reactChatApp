import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
            <input type='text' placeholder='find a user'/>
      </div>
      <div className='userChat'>
           <img src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRX_cJsmG-pyDff1Xyr7l3FrSHoWqhJD577T120CoA90Y4NYnQsS2kWRPLWaY_JtMKNTlcqclP8gZoDfiE' alt=''/>
           <div className='chatInfo'>
              <span>Rahul</span>
           </div>
      </div>
    </div>
  )
}

export default Search
